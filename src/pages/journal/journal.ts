import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {PatientService} from '../../providers/patient.service';
import {Toast} from '../../providers';

/**
 * Generated class for the JournalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-journal',
    templateUrl: 'journal.html'
})
export class JournalPage {

    content: string;
    mood: string;
    patient: any;
    user;
    diaries;

    constructor(public navCtrl: NavController,
                public patientCtrl: PatientService,
                private toastCtrl: Toast) {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.user);
        this.getPatientDiaries();
    }

    happyMood(ionicButton) {
        if (this.mood === "happy") {
            this.mood = "";
            ionicButton._color = "primary";
        }
        else {
            this.mood = "happy";
            this.buttonColor = "dark";
            ionicButton._color = 'orange';
        }
        console.log(this.mood);
    }

    sadMood(ionicButton) {
        if (this.mood === "sad") {
            this.mood = "";
            ionicButton._color = "primary";
        }
        else {
            this.mood = "sad";
            this.buttonColor = "dark";
            ionicButton._color = 'orange';
        }
        console.log(this.mood);
    }

    disgustMood(ionicButton) {
        if (this.mood === "disgust") {
            this.mood = "";
            ionicButton._color = "primary";
        }
        else {
            this.mood = "disgust";
            this.buttonColor = "dark";
            ionicButton._color = 'orange';
        }
        console.log(this.mood);
    }

    fearMood(ionicButton) {
        if (this.mood === "fear") {
            this.mood = "";
            ionicButton._color = "primary";
        }
        else {
            this.mood = "fear";
            this.buttonColor = "dark";
            ionicButton._color = 'orange';
        }
        console.log(this.mood);
    }

    loveMood(ionicButton) {
        if (this.mood === "love") {
            this.mood = "";
            ionicButton._color = "primary";
        }
        else {
            this.mood = "love";
            this.buttonColor = "dark";
            ionicButton._color = 'orange';
        }
        console.log(this.mood);
    }

    funMood(ionicButton) {
        if (this.mood === "fun") {
            this.mood = "";
            ionicButton._color = "primary";
        }
        else {
            this.mood = "fun";
            this.buttonColor = "dark";
            ionicButton._color = 'orange';
        }
        console.log(this.mood);
    }

    angerMood(ionicButton) {
        if (this.mood === "anger") {
            this.mood = "";
            ionicButton._color = "primary";
        }
        else {
            console.log("else");
            this.mood = "anger";
            ionicButton._color = 'black';
        }
        console.log(this.mood);
    }

    getPatientDiaries() {
        this.patientCtrl.getPatientDiaries(this.user.patient.id).subscribe(
            (diaries) => {
                console.log(diaries);
                this.diaries = diaries;
            },
            (err) => {return console.log(err);}
        );
    }

    diarySubmit() {
        if (this.content) {
            console.log(this.mood);
            console.log(this.content);
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
