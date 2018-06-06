import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PatientService } from '../../providers/patient.service';

/**
 * Generated class for the JournalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-journal',
  templateUrl: 'journal.html',
})
export class JournalPage {

    content: string;

    patient: any;

    constructor(public navCtrl: NavController,
                public patientCtrl: PatientService) {

    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad JournalPage');
    }

  diarySubmit() {
    console.log(this.content)
  	this.patientCtrl.patientDiary(this.content).subscribe(
            (patientFound) => {
                this.patient = patientFound;
                console.log("Response : " + this.patient.message);
            },
            (err) => {return console.log(err);
        })
  }

}
