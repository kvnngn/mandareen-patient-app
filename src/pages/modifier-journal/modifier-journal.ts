import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PatientService} from '../../providers/patient.service';
import {JournalPage} from "../journal/journal";

/**
 * Generated class for the JournalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'modifier-journal.html',
    templateUrl: 'modifier-journal.html'
})
export class ModifierJournalPage {

    content: string;
    id;
    date;

    constructor(public navCtrl: NavController,
                public patientCtrl: PatientService, public navParams: NavParams) {
        this.date = this.navParams.get("date");
        this.content = this.navParams.get("content");
        this.id = this.navParams.get("id");
    }

    diaryUpdate() {
        if (this.content.length > 0) {
            this.patientCtrl.updatePatientDiary(this.content, this.id).subscribe(
                () => {
                    this.content = '';
                },
                (err) => {return console.log(err);}
            );
        }
        this.navCtrl.setRoot(JournalPage);
    }

    updateCancel() {
        this.navCtrl.setRoot(JournalPage);
    }

}
