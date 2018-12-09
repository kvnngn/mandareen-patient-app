import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {AccueilPage} from '../pages/accueil/accueil';
import {JournalPage} from '../pages/journal/journal';
import {RecettesPage} from '../pages/recettes/recettes';
import {MusiquePage} from '../pages/musique/musique';
import {JeuxPage} from '../pages/jeux/jeux';
import {ContactPage} from '../pages/contact/contact';
import {ReglagesPage} from '../pages/reglages/reglages';
import {OneSignal, OSNotificationPayload} from '@ionic-native/onesignal';
import {oneSignalAppId, sender_id} from '../../config/config';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                private oneSignal: OneSignal) {
        this.initializeApp();

        // if (localStorage.getItem('currentUser')) {this.rootPage = 'AccueilPage';}
        // else { this.rootPage = 'LoginPage';}

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Accueil', component: AccueilPage},
            {title: 'Journal', component: JournalPage},
            {title: 'Recettes', component: RecettesPage},
            {title: 'Musique', component: MusiquePage},
            {title: 'Jeux', component: JeuxPage},
            {title: 'Nous Contacter', component: ContactPage},
            {title: 'Test', component: ListPage}
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            if (this.isCordovaAvailable()) {
                this.oneSignal.startInit(oneSignalAppId, sender_id);
                this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
                this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
                this.oneSignal.handleNotificationOpened()
                .subscribe(data => this.onPushOpened(data.notification.payload));
                this.oneSignal.endInit();
            }
        });
    }

    private onPushReceived(payload: OSNotificationPayload) {
        alert('Push recevied:' + payload.body);
    }

    private onPushOpened(payload: OSNotificationPayload) {
        alert('Push opened: ' + payload.body);
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    private isCordovaAvailable = () => {
        if (!(<any>window).cordova) {
            alert('This is a native feature. Please use a device');
            return false;
        }
        return true;
    };
}
