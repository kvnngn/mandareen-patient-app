import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";

@Injectable()

export class ApiService {

    constructor(private http: HttpClient) {}

    get(url: string) {
        url = ApiService.updateUrl(url);
        return this.http.get(url, ApiService.getRequestOptionArgs());
    }

    post(url: string, body: any) {
        url = ApiService.updateUrl(url);
        return this.http.post(url, body, ApiService.getRequestOptionArgs());
    }

    put(url: string, body: any) {
        url = ApiService.updateUrl(url);
        return this.http.put(url, body, ApiService.getRequestOptionArgs());
    }

    delete(url: string) {
        url = ApiService.updateUrl(url);
        return this.http.delete(url, ApiService.getRequestOptionArgs());
    }

    private static updateUrl(req: string) {
        return environment.origin + req;
    }

    protected static getRequestOptionArgs() {
        return {
            headers: new HttpHeaders({
                'Authorization': 'JWT ' + JSON.parse(window.localStorage.getItem('token')),
                'Content-Type': 'application/json'
            })
        };
    }
}
