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

    offset = 0;
    recipes;
    save;
    patient: any;
    image: any;
    user;
    page = 0;
    maximumPages = 4;

	constructor(public navCtrl: NavController,
                public patientCtrl: PatientService,
                public navParams: NavParams) {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.getAllRecipesNames(this.offset);
	}

	ionViewDidLoad() {
	    console.log('ionViewDidLoad RecettesPage');
	}

	SelectClicked(recipe, myEvent) {
		this.navCtrl.push(RecettesDetailsPage, {
            id: recipe.id
        });
	}

    filterItems(ev: any) {
        this.recipes = this.save
        let val = ev.target.value;

        if (val && val.trim() !== '') {
          this.recipes = this.recipes.filter(function(recipes) {
            return recipes.name.toLowerCase().includes(val.toLowerCase());
          });
        }
    }

    loadMore(infiniteScroll) {
        this.page++;
        this.getAllRecipesNames(infiniteScroll);

        if (this.page === this.maximumPages) {
          infiniteScroll.enable(false);
        }
    }

    getAllRecipesNames(infiniteScroll?) {
        this.patientCtrl.getAllRecipesNames(this.offset).subscribe(
            (recipes) => {
                console.log(recipes);
                recipes.forEach(value => {
                    if (value.image && value.image.data) {
                        const imageData = value.image.data;
                        value.image = "data:image/jpg;base64,"+ btoa(String.fromCharCode.apply(null, imageData));;
                    }
                });
                this.offset += 3;
                if (this.recipes)
                    Array.prototype.push.apply(this.recipes, recipes);
                else
                    this.recipes = recipes;
                this.save = this.recipes;
                if (infiniteScroll) {
                    infiniteScroll.complete();
                }
            },
            (err) => {return console.log(err);}
        );
    }


}
