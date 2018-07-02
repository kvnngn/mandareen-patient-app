import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthService, Toast} from '../../providers';
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
                public auth: AuthService,
                private toastCtrl: Toast) {}

    login() {
        this.auth.signin(this.username, this.password).subscribe(
            (patientFound) => {
                localStorage.setItem('currentUser', JSON.stringify(patientFound));
                this.navCtrl.setRoot(AccueilPage);
            },
            (err) => {
                console.log(err);
                let msg = err.error.error;
                if (msg == 'User not found') {
                    this.toastCtrl.create('Aucun compte n\'est associé à cette adresse mail',
                        false,
                        'top'
                    );
                }
                if (msg == 'invalid password') {
                    this.toastCtrl.create('Mot de passe incorrect',
                        false,
                        'top'
                    );
                }
                return console.log(err);
            }
        );
    }
}
