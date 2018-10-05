import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PatientService} from '../../providers/patient.service';
import {Toast} from '../../providers';

/**
 * Generated class for the RecettesDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recettes-details',
  templateUrl: 'recettes-details.html',
})
export class RecettesDetailsPage {

	recipeDetail: any;
	public canRender = false;
	id;

  constructor(public navCtrl: NavController, public patientCtrl: PatientService, public navParams: NavParams) {
  	this.id = this.navParams.get('id');
  	this.getRecipeDetail(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecettesDetailsPage');
  }

	getRecipeDetail(id) {
        this.patientCtrl.getRecipeDetail(this.id).subscribe(
            (recipeDetail) => {
                this.recipeDetail = recipeDetail;
                this.canRender = true;
                console.log(this.recipeDetail.id + "\n name : " + this.recipeDetail.name);
            },
            (err) => {return console.log(err);}
        );
    }

}
