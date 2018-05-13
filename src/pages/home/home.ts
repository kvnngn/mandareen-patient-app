import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { PatientService } from '../../providers/patient.service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    username:string;
    password:string;

    patient: any;

    constructor(public navCtrl: NavController,
                public patientCtrl: PatientService) {

    }

    login(){

        console.log("Username: " + this.username);
        console.log("Password: " + this.password);

        this.patientCtrl.patientLogin(this.username, this.password).subscribe(
            (patientFound) => {
                this.patient = patientFound;
                console.log(this.patient);
            },
            (err) => {return console.log(err);
        })
    }

    goRegister() {
        this.navCtrl.push(RegisterPage);
    }

    getPatients() {
        console.log("here : " + this.patient);
        this.patientCtrl.getPatients().subscribe(
            (patient) => {
                this.patient = patient;
                console.log(this.patient);
            },
            (err) => {return console.log(err);}
        );
    }
}
