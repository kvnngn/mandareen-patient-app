import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ApiService} from './api.service';

@Injectable()
export class PatientService {
    constructor(private api: ApiService) {
    }

    sendPatientDiary(content, id) {
        return this.api.post('/patient/diary/', {content: content, id : id});
    }

    getPatientDiaries(id) {
        return this.api.get('/patient/diaries/' + id);
    }

    changeEmail(id, newEmail) {
        let data = {
            'id': id,
            'newEmail': newEmail
        };
        return this.api.post('/patient/changeEmail/', data);
    }
}