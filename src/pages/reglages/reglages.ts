import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import {PatientService} from '../../providers/patient.service';

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
	  			public patientCtrl: PatientService) {
		this.user = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.user);
	}

  	ionViewDidLoad() {
   		console.log('ionViewDidLoad ReglagesPage');
 	}

  changeEmail() {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(re.test(this.email)) {
		this.patientCtrl.changeEmail(this.user.patient.id, this.email).subscribe(
            (result) => {
                console.log(result);
                console.log(this.user.patient.email);
            },
            (err) => {return console.log(err);}
        );
	}
	// !******** Faire apparaître popup erreur **********! //
  }

}
