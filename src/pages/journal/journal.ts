import {Component} from '@angular/core';
import { DatePipe } from '@angular/common';
import {IonicPage, NavController, Events, Platform} from 'ionic-angular';
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


@Component({
    selector: 'page-journal',
    templateUrl: 'journal.html'
})
export class JournalPage {

    start;
    end;
    timeOnPage;

    content: string;
    mood: number;
    patient: any;
    user;
    diaries;

    constructor(public navCtrl: NavController,
                public patientCtrl: PatientService,
                private toastCtrl: Toast,
                public platform: Platform,
                private datePipe: DatePipe,
                public events: Events) {
        this.start = new Date();
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.getPatientDiaries();
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

    ionViewWillUnload() {
        this.sendingTimeInfo("Diary");
        this.sendingTimeInfo("Total");
    }

    diaryUpdatePage(id, content, date) {
        this.navCtrl.setRoot(ModifierJournalPage, {id: id, content: content, date: date});
    }

    getPatientDiaries() {
        this.patientCtrl.getPatientDiaries(this.user.patient.id).subscribe(
            (diaries) => {
                this.diaries = diaries;
            },
            (err) => {return console.log(err);}
        );
    }

    happyMood(ionicButton) {
        if (this.mood === 1) {
            this.mood = 0;
            ionicButton._color = "primary";
        }
        else {
            this.mood = 1;
            //this.buttonColor = "dark";
            ionicButton._color = 'orange';
        }
        console.log(this.mood);
    }

    sadMood(ionicButton) {
        if (this.mood === 2) {
            this.mood = 0;
            ionicButton._color = "primary";
        }
        else {
            this.mood = 2;
            //this.buttonColor = 'dark';
            ionicButton._color = 'dark';
        }
        console.log(this.mood);
    }

    angerMood(ionicButton) {
        if (this.mood === 3) {
            this.mood = 0;
            ionicButton._color = "primary";
        }
        else {
            this.mood = 3;
            ionicButton._color = 'black';
        }
        console.log(this.mood);
    }

    disgustMood(ionicButton) {
        if (this.mood === 4) {
            this.mood = 0;
            ionicButton._color = "primary";
        }
        else {
            this.mood = 4;
            //this.buttonColor = "dark";
            ionicButton._color = 'orange';
        }
        console.log(this.mood);
    }

    fearMood(ionicButton) {
        if (this.mood === 5) {
            this.mood = 0;
            ionicButton._color = "primary";
        }
        else {
            this.mood = 5;
            //this.buttonColor = "dark";
            ionicButton._color = 'orange';
        }
        console.log(this.mood);
    }

    surpriseMood(ionicButton) {
        if (this.mood === 6) {
            this.mood = 0;
            ionicButton._color = "primary";
        }
        else {
            this.mood = 6;
            //this.buttonColor = 'dark';
            ionicButton._color = 'dark';
        }
        console.log(this.mood);
    }

    dispiseMood(ionicButton) {
        if (this.mood === 7) {
            this.mood = 0;
            ionicButton._color = "primary";
        }
        else {
            this.mood = 7;
            //this.buttonColor = "dark";
            ionicButton._color = 'orange';
        }
        console.log(this.mood);
    }

    diarySubmit() {
        if (this.content) {
            this.patientCtrl.sendPatientDiary(this.content, this.mood, this.user.patient.id).subscribe(
                () => {
                    this.getPatientDiaries();
                    this.content = '';
                },
                (err) => {return console.log(err);}
            );
        }
        else {
            this.toastCtrl.create('Le contenu du journal ne peut pas être envoyé vide', false, 'top');
        }
    }

}
