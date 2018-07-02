import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthService} from '../../providers';
import {AccueilPage} from '../accueil/accueil';

@Component({
    selector: 'page-home',
    templateUrl: 'login.html'
})
export class LoginPage {

    username: string;
    password: string;

    patient: any;

    constructor(public navCtrl: NavController,
                public auth: AuthService) {}

    login() {
        this.auth.signin(this.username, this.password).subscribe(
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
