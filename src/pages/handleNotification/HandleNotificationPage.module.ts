import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {HandleNotificationPage} from "./HandleNotificationPage";

@NgModule({
  declarations: [
    HandleNotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(HandleNotificationPage),
  ],
})
export class HandleNotificationModule {}
