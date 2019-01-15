import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams, Events, Platform } from 'ionic-angular';
import {PatientService} from '../../providers/patient.service';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

	start;
	end;
	appTime;

	patient: any;
	user;

	constructor(public navCtrl: NavController,
	public navParams: NavParams,
	public patientCtrl: PatientService,
	public platform: Platform,
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
        console.log("Contact : " + this.appTime + "s");
        let date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        console.log(date);
        this.patientCtrl.sendTimePassedOnPage(date, this.appTime, this.user.patient.id, page).subscribe(
                (err) => {return console.log(err);
		})
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ContactPage');
	}

	ionViewWillUnload() {
        this.sendingTimeInfo("Total")
    }

}
