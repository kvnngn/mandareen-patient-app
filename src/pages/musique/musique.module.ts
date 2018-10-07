import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusiquePage } from './musique';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { AndroidPermissions } from "@ionic-native/android-permissions";
import { AudioProvider } from "ionic-audio";

@NgModule({
  declarations: [
    MusiquePage,
  ],
  imports: [
    IonicPageModule.forChild(MusiquePage),
  ],
    providers: [
        File,
        FilePath,
        AndroidPermissions,
    ],
})
export class MusiquePageModule {}
