import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	username: string;
	password: string;
	repassword: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
  	if(this.username.length==0 || this.password.length==0 || this.repassword.length==0)
  		alert("Please fill all the fields");
  	else if (/*this.username.length already exist + this.password < 1 MAJ*/ this.password.length < 6)
  		alert("Password need to be minimum 6 characters wide.");
  	else if (this.password != this.repassword)
  		alert("Error : Passwords aren't the same.");
  }

}
