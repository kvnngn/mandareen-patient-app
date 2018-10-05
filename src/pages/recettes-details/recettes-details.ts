import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PatientService} from '../../providers/patient.service';

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
    this.recipeDetail = {
      ingredients: "",
      description: "",
      name: "",
      img_path: "",
      id: -1,
      nb_cal: 0
    }
  	this.getRecipeDetail(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecettesDetailsPage');
  }

	getRecipeDetail(id) {
        this.patientCtrl.getRecipeDetail(this.id).subscribe(
            (recipeDetail) => {
                this.recipeDetail = recipeDetail;
                this.recipeDetail.ingredients = recipeDetail['ingredients'].replace(/;/g, '\n');
                this.recipeDetail.description = recipeDetail['description'].replace(/;ÉTAPE/g, ";;ÉTAPE").replace(/;/g, '\n');
                this.canRender = true;
            },
            (err) => {return console.log(err);}
        );
    }

}
