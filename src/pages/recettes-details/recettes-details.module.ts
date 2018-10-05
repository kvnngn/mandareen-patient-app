import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecettesDetailsPage } from './recettes-details';

@NgModule({
  declarations: [
    RecettesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecettesDetailsPage),
  ],
})
export class RecettesDetailsPageModule {}
