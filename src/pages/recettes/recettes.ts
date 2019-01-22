import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams, Events, Platform } from 'ionic-angular';
import {PatientService} from '../../providers/patient.service';
import { RecettesDetailsPage } from '../recettes-details/recettes-details';

/**
 * Generated class for the RecettesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-recettes',
  templateUrl: 'recettes.html',
})
export class RecettesPage {

    start;
    end;
    timeOnPage;

    offset = 0;
    recipes: any;
    save;
    patient: any;
    image: any;
    user;
    page = 0;
    maximumPages = 4;

	constructor(public navCtrl: NavController,
                public patientCtrl: PatientService,
                public navParams: NavParams,
                public platform: Platform,
                private datePipe: DatePipe,
                public events: Events) {
        this.start = new Date();
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.getAllRecipesNames(this.offset);
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

        this.timeOnPage = `${hours}:${minutes}:${seconds}`
        console.log("Recipes : " + this.timeOnPage + "s");
        let date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        console.log(date);
        this.patientCtrl.sendTimePassedOnPage(date, this.timeOnPage, this.user.patient.id, page).subscribe(
                (err) => {return console.log(err);}
        );
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RecettesPage');
    }

    ionViewWillUnload() {
        this.sendingTimeInfo("Total");
        this.sendingTimeInfo("Recipes");
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
                if (Array.isArray(recipes)) {
                    for (var value of recipes) {
                        if (value.image && value.image.data) {
                            const imageData = value.image.data;
                            value.image = "data:image/jpg;base64,"+ btoa(String.fromCharCode.apply(null, imageData));;
                        }
                    };
                    this.offset += 3;
                    if (this.recipes)
                        Array.prototype.push.apply(this.recipes, recipes);
                    else
                        this.recipes = recipes;
                    this.save = this.recipes;
                    if (infiniteScroll) {
                        infiniteScroll.complete();
                    }
                }
            },
            (err) => {return console.log(err);}
        );
    }


}
