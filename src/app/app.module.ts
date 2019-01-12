import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {LoginPage} from '../pages/login/login';
import {ApiService, AuthService} from '../providers';
import {PatientService} from '../providers';
import {Toast} from '../providers';
import { DatePipe } from '@angular/common'

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccueilPage } from '../pages/accueil/accueil';
import { JournalPage } from '../pages/journal/journal';
import { RecettesPage } from '../pages/recettes/recettes';
import { RecettesDetailsPage } from '../pages/recettes-details/recettes-details';
import { ModifierJournalPage } from '../pages/modifier-journal/modifier-journal';
import { MusiquePage } from '../pages/musique/musique';
import { JeuxPage } from '../pages/jeux/jeux';
import { ContactPage } from '../pages/contact/contact';
import { ReglagesPage } from '../pages/reglages/reglages';

import { IonicAudioModule, defaultAudioProviderFactory } from 'ionic-audio';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListPage,
    AccueilPage,
    JournalPage,
    RecettesPage,
    RecettesDetailsPage,
    ModifierJournalPage,
    MusiquePage,
    JeuxPage,
    ContactPage,
    ReglagesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
      IonicAudioModule.forRoot(defaultAudioProviderFactory),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListPage,
    AccueilPage,
    JournalPage,
    RecettesPage,
    RecettesDetailsPage,
    ModifierJournalPage,
    MusiquePage,
    JeuxPage,
    ContactPage,
    ReglagesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PatientService,
    ApiService,
    AuthService,
    DatePipe,
    Toast,
      {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
