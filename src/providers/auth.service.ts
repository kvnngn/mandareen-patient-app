import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {UserModel} from '../models';
import {ApiService} from './api.service';
import {Events} from 'ionic-angular';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable()
export class AuthService {
    currentUser = JSON.parse(localStorage.getItem('userData')) || null;
    activeUser = new BehaviorSubject(null);

    constructor(private api: ApiService,
                public events: Events) {
        setTimeout(() => this.activeUser.next(this.currentUser), 1000);
    }

    signin(email, password) {
        let data = {
            'email': email,
            'password': password
        };
        return this.api.post('/patient/login/', data);
    }

    getUser(): Observable<UserModel> {
        return this.activeUser.asObservable().share();
    }

    sendRestMailPassword(credentials) {
        return this.api.put('/pros/auth/reset', credentials);
    }

    logOut() {
        window.localStorage.removeItem('userData');
        window.localStorage.removeItem('token');
        this.activeUser.next(null);
        return true;
    }
}
