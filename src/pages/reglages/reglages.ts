import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams, Events, Platform } from 'ionic-angular';
import {PatientService} from '../../providers/patient.service';
import { AlertController} from 'ionic-angular'

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

    start;
    end;
    appTime;

	email: string;
	patient: any;
	user;

	constructor(public navCtrl: NavController, 
	  			public navParams: NavParams,
	  			public patientCtrl: PatientService,
                public platform: Platform,
                public alertCtrl: AlertController,
                public events: Events,
                private datePipe: DatePipe) {
        this.start = new Date();
		this.user = JSON.parse(localStorage.getItem('currentUser'));
        const that = this;
        this.platform.ready().then(() => {
            this.platform.pause.subscribe(() => {
                console.log("Test : App closed");
                that.sendingTimeInfo("Total");
            })
        });
	}

    sendingTimeInfo(page) {
        this.end = new Date();
        
        var milliseconds = Math.abs((this.end.getTime() - this.start.getTime()));
        const hours = `0${new Date(milliseconds).getHours() - 1}`.slice(-2);
        const minutes = `0${new Date(milliseconds).getMinutes()}`.slice(-2);
        const seconds = `0${new Date(milliseconds).getSeconds()}`.slice(-2);

        this.appTime = `${hours}:${minutes}:${seconds}`
        console.log("Accueil : " + this.appTime + "s");
        let date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        console.log(date);
        this.patientCtrl.sendTimePassedOnPage(date, this.appTime, this.user.patient.id, page).subscribe(
                (err) => {return console.log(err);
        })
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ReglagesPage');
    }

    ionViewWillUnload() {
        this.sendingTimeInfo("Total")
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
