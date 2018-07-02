import {Injectable} from '@angular/core';
import {ToastController} from 'ionic-angular';

@Injectable()
export class Toast {

    constructor(public toastCtrl: ToastController) {}

    create(msg, status, position) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: position,
            cssClass: status,
            showCloseButton: true,
            closeButtonText: "x"
        });
        return toast.present();
    }
}
