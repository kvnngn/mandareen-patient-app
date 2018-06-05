import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusiquePage } from './musique';

@NgModule({
  declarations: [
    MusiquePage,
  ],
  imports: [
    IonicPageModule.forChild(MusiquePage),
  ],
})
export class MusiquePageModule {}
