﻿import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ApiService} from './api.service';

@Injectable()
export class PatientService {
    constructor(private api: ApiService) {
    }

    getPatients() {
        return this.api.get('/patients/account/patients/');
    }
}