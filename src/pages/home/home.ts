import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PatientService} from '../../providers/patient.service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    patient: any;

    constructor(public navCtrl: NavController,
                public patientCtrl: PatientService) {

    }

    getPatients() {
        this.patientCtrl.getPatients().subscribe(
            (patient) => {this.patient = patient;},
            (err) => {return console.log(err);}
        );
    }
}
