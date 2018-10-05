import {Component, ViewChild} from '@angular/core';
import {App, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {LoginPage} from '../pages/login/login';
import {AccueilPage} from '../pages/accueil/accueil';
import {JournalPage} from '../pages/journal/journal';
import {RecettesPage} from '../pages/recettes/recettes';
import {MusiquePage} from '../pages/musique/musique';
import {JeuxPage} from '../pages/jeux/jeux';
import {ContactPage} from '../pages/contact/contact';
import {ReglagesPage} from '../pages/reglages/reglages';
import {AuthService, Toast} from '../providers';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = LoginPage;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                public appCtrl: App,
                public auth: AuthService,
                private toastCtrl: Toast) {
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
            {title: 'Réglages', component: ReglagesPage}
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    logOutClicked() {
        this.auth.logOut();
        this.appCtrl.getRootNav().setRoot(LoginPage);
        this.toastCtrl.create('Vous vous êtes déconnecté.',
            false,
            'top'
        );
    }
}
