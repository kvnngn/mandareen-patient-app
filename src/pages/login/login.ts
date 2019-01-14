import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthService, Toast, UserService} from '../../providers';
import {AccueilPage} from '../accueil/accueil';
import {OneSignal} from "@ionic-native/onesignal";
import {Device} from "@ionic-native/device";
import {environment} from "../../environments/environment";

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
                private oneSignal: OneSignal,
                private device: Device,
                private userService: UserService,
                private toastCtrl: Toast) {
    }

    login() {
        this.auth.signin(this.username, this.password).subscribe(
            (patientFound) => {
                this.storeToken(patientFound['patient']['id']);
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

    storeToken(id) {
        this.oneSignal.getIds()
            .then((ids) => {
                const device = {
                    uuid: ids['userId'],
                    token: ids['pushToken'],
                    platform: this.device.platform,
                    version: this.device.version,
                    model: this.device.model,
                    manufacturer: this.device.manufacturer,
                    app_version: environment.version,
                    patient_id: id
                };
                return this.userService.storeToken(device).subscribe();
            });
    }
}
