import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PatientService} from '../../providers/patient.service';
import { RecettesDetailsPage } from '../recettes-details/recettes-details';

/**
 * Generated class for the RecettesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recettes',
  templateUrl: 'recettes.html',
})
export class RecettesPage {

    recipes;
    patient: any;
    user;

	constructor(public navCtrl: NavController,
                public patientCtrl: PatientService,
                public navParams: NavParams) {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.getAllRecipesNames();
	}

	ionViewDidLoad() {
	    console.log('ionViewDidLoad RecettesPage');
	}

	SelectClicked(recipe, myEvent) {
		this.navCtrl.push(RecettesDetailsPage, {
            id: recipe.id
        });
	}

    getAllRecipesNames() {
        this.patientCtrl.getAllRecipesNames().subscribe(
            (recipes) => {
                console.log(recipes);
                this.recipes = recipes;
            },
            (err) => {return console.log(err);}
        );
        /*console.log("IN FOR");
        for (let recipe in this.recipes){
            console.log("TAMERE");
            console.log(recipe.img_path);
        }
        console.log("OUT FOR");*/
    }


}
