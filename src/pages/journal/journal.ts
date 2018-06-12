import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {PatientService} from '../../providers/patient.service';

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
    patient: any;
    user;
    diaries;

    constructor(public navCtrl: NavController,
                public patientCtrl: PatientService) {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.user);
        this.getPatientDiaries();
    }

    getPatientDiaries() {
        this.patientCtrl.getPatientDiaries(this.user.patient.id).subscribe(
            (diaries) => {this.diaries = diaries;},
            (err) => {return console.log(err);}
        );
    }

    diarySubmit() {
        this.patientCtrl.sendPatientDiary(this.content, this.user.patient.id).subscribe(
            () => {this.getPatientDiaries();},
            (err) => {return console.log(err);}
        );
    }

}
