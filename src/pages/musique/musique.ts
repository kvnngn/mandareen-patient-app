import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, LoadingController, Loading} from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { AndroidPermissions } from "@ionic-native/android-permissions";
import { AlertController } from "ionic-angular";
import { AudioProvider } from "ionic-audio";
import { Storage } from "@ionic/storage";
import SpotifyWebApi from "spotify-web-api-js";

/**
 * Generated class for the MusiquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-musique',
  templateUrl: 'musique.html',
    providers: [File, FilePath, AndroidPermissions, Storage],
})

export class MusiquePage {
    musicList = [];
    fileList = [];
    tracksList = [];
    selectedTrack;
    isPlaying = false;
    result = {};
    data = '';
    playlists = [];
    spotifyApi: any;
    loggedIn = false;
    loading: Loading;

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public file: File, public platform: Platform, public filePath: FilePath,
                public permissions: AndroidPermissions, private alertCtrl: AlertController,
                private audioProvider: AudioProvider, private storage: Storage, private loadingCtrl: LoadingController) {

        this.spotifyApi = new SpotifyWebApi();

        this.platform.ready().then(() => {
            this.storage.get('logged_in').then(res => {
                if (res) {
                    this.authWithSpotify(true);
                }
            });
        });
    }

    authWithSpotify(showLoading = false) {
        const config = {
            clientId: "902d20d5fa32455a9103d84be88363aa",
            redirectUrl: "devdacticspotify://callback",
            scopes: ["streaming", "playlist-read-private", "user-read-email", "user-read-private"],
            tokenExchangeUrl: "https://spotifyoauthserver.herokuapp.com/exchange",
            tokenRefreshUrl: "https://spotifyoauthserver.herokuapp.com/refresh",
        };

        if (showLoading) {
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }

        cordova.plugins.spotifyAuth.authorize(config)
            .then(({ accessToken, encryptedRefreshToken, expiresAt }) => {
                if (this.loading) {
                    this.loading.dismiss();
                }

                this.result = { access_token: accessToken, expires_in: expiresAt, refresh_token: encryptedRefreshToken };
                this.loggedIn = true;
                this.spotifyApi.setAccessToken(accessToken);
                this.getUserPlaylists();
                this.storage.set('logged_in', true);
            }, err => {
                console.error(err);
                if (this.loading) {
                    this.loading.dismiss();
                }
            });
    }

    getUserPlaylists() {
        this.loading = this.loadingCtrl.create({
            content: "Loading Playlists...",
        });
        this.loading.present();

        this.spotifyApi.getUserPlaylists()
            .then(data => {
                if (this.loading) {
                    this.loading.dismiss();
                }
                this.playlists = data.items;
            }, err => {
                console.error(err);
                if (this.loading) {
                    this.loading.dismiss();
                }
            });
    }

    openPlaylist(item) {
        this.navCtrl.push('PlaylistPage', { playlist: item });
    }

    logout() {
        // Should be a promise but isn't
        cordova.plugins.spotifyAuth.forget();

        this.loggedIn = false;
        this.playlists = [];
        this.storage.set('logged_in', false);
    }

    public getMusicList1() {
        if (this.musicList.length == 0) {
            var perm = this.permissions.checkPermission(this.permissions.PERMISSION.READ_EXTERNAL_STORAGE)
            perm.then(() => this.getMusicList2())
                .catch(() => this.permissions.requestPermission(this.permissions.PERMISSION.READ_EXTERNAL_STORAGE)
                    .then(() => this.getMusicList2())
                    .catch(() => this.alertLaunch('Permission refusée',
                        'Impossible de lire les musiques présentes sur l\'appareil',
                        ['Fermer']))
                );
        }
    }

    private alertLaunch(title, subTitle, buttons) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: buttons
        });
        alert.present();
    }

    public getMusicList2() {
        this.platform.ready().then(() => {
            //the first parameter file.externalRootDirectory is for listing all files on application's root directory
            //The second parameter is the name of the folder. You can specify the nested folder here. e.g. 'Music/Coldplay'
            this.file.listDir(this.file.externalRootDirectory, '').then((result) => {
                    for (let item of result) {
                        if (item.isDirectory == true && item.name != '.' && item.name != '..') {
                            this.getFileList(item.name);//Get all the files inside the folder. recursion will probably be useful here.
                        }
                        else if (item.isFile && (item.name.includes('.mp3') || item.name.includes('.wav'))) {
                            this.musicList.push(item.name)
                            this.fileList.push(item)
                        }
                    }
                    this.setTracks();
                },
                (error) => {
                    console.log(error);
                });
        })
    }

    public getFileList(path: string): any {
        let file = new File();
        this.file.listDir(file.externalRootDirectory, path)
            .then((result) => {
                for (let item of result) {
                    if (item.isDirectory == true && item.name != '.' && item.name != '..') {
                        this.getFileList(path + '/' + item.name);
                    }
                    else if (item.isFile && (item.name.includes('.mp3') || item.name.includes('.wav'))) {
                        this.musicList.push(item.name)
                        this.fileList.push(item)
                    }
                }
            }, (error) => {
                console.log(error);
            })
    }

    public setTracks()
    {
        for (let item of this.fileList)
        {
            var track = {
                src: item.nativeURL,
                artist: '',
                title: item.name.substring(item.name.length - 4),
                art: '',
                preload: 'metadata'
            }
            this.tracksList.push(this.audioProvider.create(track));
        }
    }

    public playMusic(track) {
        if (this.tracksList.length == 0)
            this.setTracks();
        if (this.tracksList.length != 0) {
            var trackToPlay = this.tracksList.indexOf(this.tracksList[track]);
            if (this.isPlaying)
                this.audioProvider.stop(this.selectedTrack)
            this.audioProvider.play(trackToPlay);
            this.selectedTrack = trackToPlay;
            this.isPlaying = true;
        }
        else
            this.alertNoMusic();
    }

    public playButton() {
        try {
            if (this.tracksList.length == 0)
                this.setTracks();
            if (this.tracksList.length != 0) {
                this.audioProvider.play(this.selectedTrack);
                this.isPlaying = true;
            }
            else
                this.alertNoMusic();
        }
        catch (e) {
            this.selectedTrack = this.tracksList[0];
            this.audioProvider.play(this.selectedTrack);
            this.isPlaying = true;
        }
    }

    public pauseMusic()
    {
        this.audioProvider.pause(this.selectedTrack);
        this.isPlaying = false;
    }

    public stopMusic() {
        this.audioProvider.stop(this.selectedTrack);
        this.isPlaying = false;
    }

    public nextMusic() {
        var index = this.selectedTrack;
        this.audioProvider.stop(this.selectedTrack);
        if (index == this.tracksList.length - 1)
            index = 0;
        else
            index += 1;
        if (this.isPlaying)
            this.audioProvider.play(index);
        this.selectedTrack = index;
    }

    public lastMusic() {
        var index = this.selectedTrack;
        this.audioProvider.stop(this.selectedTrack);
        if (index == 0)
            index = this.tracksList.length - 1;
        else
            index -= 1;
        if (this.isPlaying)
            this.audioProvider.play(index);
        this.selectedTrack = index;
    }

    private alertNoMusic() {
        this.alertLaunch('Musique', 'Aucune Musique à jouer', ['Fermer'])
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MusiquePage');
    }
}
