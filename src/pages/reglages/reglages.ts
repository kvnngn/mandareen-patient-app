import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import {PatientService} from '../../providers/patient.service';
import { AlertController} from 'ionic-angular'
import {componentRefresh} from "@angular/core/src/render3/instructions";

/**
 * Generated class for the ReglagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reglages',
  templateUrl: 'reglages.html',
})
export class ReglagesPage {

	email: string;
	patient: any;
	user;

	constructor(public navCtrl: NavController, 
	  			public navParams: NavParams,
	  			public patientCtrl: PatientService,
                public alertCtrl: AlertController) {
		this.user = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.user);
	}

  	ionViewDidLoad() {
   		console.log('ionViewDidLoad ReglagesPage');
 	}

  changeEmail(data) {
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(data.email)) {
            this.patientCtrl.changeEmail(this.user.patient.id, data.email).subscribe(
                (result) => {
                    this.showConfirmEdit();
                },
                (err) => {return this.showErrorEdit(err);}
            );
        }
        else {this.showErrorEdit("l'email rentré n'est pas valide.");}
  }

    showEditEmail():void {
        const prompt = this.alertCtrl.create({
            title: 'Changer mon email',
            message: "Entrer un email valide",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'exemple@gmail.com'
                },
            ],
            buttons: [
                'Annuler',
                {
                    text: 'Modifier',
                    handler: data => {
                        if (data.email == this.user.patient.email) {
                            return this.showErrorEdit("l'email rentré est identique à l'ancien.");
                        }
                        this.changeEmail(data);
                    }
                }
            ]
        });
        prompt.present();
    }

    showConfirmEdit() {
        const confirm = this.alertCtrl.create({
            title: 'Succès',
            message: 'Votre email a bien été mis à jour.',
            buttons: ['OK']
        });
        confirm.present();
    }

    showErrorEdit(error) {
        const confirm = this.alertCtrl.create({
            title: 'Erreur',
            message: "Nous avons rencontré une erreur en modifiant votre email:<br><br>" + error,
            buttons: ['OK']
        });
        confirm.present();
    }

}
