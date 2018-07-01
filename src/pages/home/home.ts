import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AccueilPage} from '../accueil/accueil';
import {PatientService} from '../../providers/patient.service';
import { GlobalProvider } from '../../providers/global/global';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    username: string;
    password: string;

    patient: any;

    constructor(public navCtrl: NavController,
                public patientCtrl: PatientService) {

    }

    login() {
        this.patientCtrl.patientLogin(this.username, this.password).subscribe(
            (patientFound) => {
                localStorage.setItem('currentUser', JSON.stringify(patientFound));
                this.navCtrl.setRoot(AccueilPage);
            },
            (err) => {
                // !******** Faire apparaître popup erreur **********! //
                return console.log(err);
            }
        );
    }
}
