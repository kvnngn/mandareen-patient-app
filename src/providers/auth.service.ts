import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ApiService} from './api.service';
import {Events} from 'ionic-angular';
import {BehaviorSubject, Observable} from 'rxjs';
import {ICurrentUser} from '../models';


@Injectable()
export class AuthService {
    private currentUserSubject: BehaviorSubject<ICurrentUser>;
    public currentUser: Observable<ICurrentUser>;

    constructor(private api: ApiService,
                public events: Events) {
        this.currentUserSubject = new BehaviorSubject<ICurrentUser>(JSON.parse(localStorage.getItem('userData')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    private static setAccessToken(accessToken: string) {
        if (!accessToken) {
            localStorage.removeItem('token');
        } else {
            localStorage.setItem('token', accessToken);
        }
    }

    signin(email, password) {
        return this.api.post('/patient/login/', {
            'email': email,
            'password': password
        }).map(user => {
            if (user && user['token']) {
                AuthService.setAccessToken(user['token']);
                localStorage.setItem('userData', JSON.stringify(user));
                this.currentUserSubject.next(<ICurrentUser>user);
            }
            return <ICurrentUser>user;
        });
    }

    sendRestMailPassword(credentials) {
        return this.api.put('/pros/auth/reset', credentials);
    }

    logOut() {
        localStorage.removeItem('userData');
        this.currentUserSubject.next(null);
        AuthService.setAccessToken(null);
        return true;
    }

    isAuthenticated(): boolean {
        return !!this.getAccessToken();
    }

    getAccessToken() {
        return localStorage.getItem('token');
    }
}
