import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import {IonicPage, NavController, NavParams, Platform, Events} from 'ionic-angular';
import { File } from '@ionic-native/file';
import {PatientService} from '../../providers/patient.service';
import { FilePath } from '@ionic-native/file-path';
import { AndroidPermissions } from "@ionic-native/android-permissions";
import { AlertController } from "ionic-angular";
import { AudioProvider } from "ionic-audio";

/**
 * Generated class for the MusiquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-musique',
  templateUrl: 'musique.html',
    providers: [File, FilePath, AndroidPermissions],
})

export class MusiquePage {
    
    start;
    end;
    appTime;

    patient: any;
    user;

    musicList = [];
    fileList = [];
    tracksList = [];
    selectedTrack;
    isPlaying = false;
    logged = false;

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public file: File, public platform: Platform, public filePath: FilePath,
                public permissions: AndroidPermissions, private alertCtrl: AlertController,
                private audioProvider: AudioProvider,
                public patientCtrl: PatientService,
                public events: Events,
                private datePipe: DatePipe) {
        this.start = new Date();
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        const that = this;
        this.platform.ready().then(() => {
            this.platform.pause.subscribe(() => {
                console.log("Test : App closed");
                that.sendingTimeInfo("Total");
            })
        });
    }

    sendingTimeInfo(page) {
        this.end = new Date();
        
        var milliseconds = Math.abs((this.end.getTime() - this.start.getTime()));
        const hours = `0${new Date(milliseconds).getHours() - 1}`.slice(-2);
        const minutes = `0${new Date(milliseconds).getMinutes()}`.slice(-2);
        const seconds = `0${new Date(milliseconds).getSeconds()}`.slice(-2);

        this.appTime = `${hours}:${minutes}:${seconds}`
        console.log("Accueil : " + this.appTime + "s");
        let date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        console.log(date);
        this.patientCtrl.sendTimePassedOnPage(date, this.appTime, this.user.patient.id, page).subscribe(
                (err) => {return console.log(err);
        })
    }

    ionViewWillUnload() {
        this.sendingTimeInfo("Total");
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad MusiquePage');
    }

    SpotifyAuth(){
        this.patientCtrl.spotifyAuthorize().subscribe(
            (data) => {
                console.log(data);
                this.logged = true;
            },
            (err) => {return console.log(err);}
        );
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

}
