import {Component} from '@angular/core';
import { DatePipe } from '@angular/common';
import {IonicPage, NavController, Events, Platform, NavParams} from 'ionic-angular';
import {PatientService} from '../../providers/patient.service';
import {Toast} from '../../providers';
import {AccueilPage} from "../accueil/accueil";
import {ModifierJournalPage} from "../modifier-journal/modifier-journal";

/**
 * Generated class for the JournalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'HandleNotificationPage',
    templateUrl: 'HandleNotificationPage.html'
})
export class HandleNotificationPage {

    start;
    end;
    timeOnPage;
    content: string;
    mood: number;
    patient: any;
    user;
    diaries;
    notif;

    constructor(public navCtrl: NavController,
                public patientCtrl: PatientService,
                private navParams: NavParams,
                private toastCtrl: Toast,
                public platform: Platform,
                private datePipe: DatePipe,
                public events: Events) {
        this.user = JSON.parse(localStorage.getItem('userData'));
        console.log(this.user)
        this.notif = navParams.get('notif');
    }

    sendingTimeInfo(page) {
        this.end = new Date();
        
        var milliseconds = Math.abs((this.end.getTime() - this.start.getTime()));
        const hours = `0${new Date(milliseconds).getHours() - 1}`.slice(-2);
        const minutes = `0${new Date(milliseconds).getMinutes()}`.slice(-2);
        const seconds = `0${new Date(milliseconds).getSeconds()}`.slice(-2);

        this.timeOnPage = `${hours}:${minutes}:${seconds}`
        console.log("Journal : " + this.timeOnPage + "s");
        let date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        console.log(date);
        this.patientCtrl.sendTimePassedOnPage(date, this.timeOnPage, this.user.patient.id, page).subscribe(
                (err) => {return console.log(err);}
        );
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad JournalPage');
    }

    diarySubmit() {
        if (this.content) {
       }
        else {
            this.toastCtrl.create('Le contenu ne peut pas être envoyé vide', false, 'top');
        }
    }

}
