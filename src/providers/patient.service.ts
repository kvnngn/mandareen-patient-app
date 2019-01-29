import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ApiService} from './api.service';

@Injectable()
export class PatientService {
    constructor(private api: ApiService) {
    }

    sendPatientDiary(content, mood, id) {
        return this.api.post('/patient/diary/', {content: content, id : id, mood : mood});
    }

    sendTimePassedOnPage(date, time, patient_id, page){
        return this.api.post('/patient/timePassedOnPage', {date: date, time: time, patient_id: patient_id, page: page});
    }

    getAllRecipesNames(offset){
        return this.api.get('/patient/recipesNames/' + offset);
    }

    getRecipeDetail(id){
        return this.api.get('/patient/recipeDetails/' + id);
    }

    getPatientDiaries(id) {
        return this.api.get('/patient/diaries/' + id);
    }

    spotifyAuthorize() {
        console.log("taerace");
        return this.api.get('/patient/spotifyAuthorize/');
    }

    updatePatientDiary(content, id) {
        let data = {
            'id': id,
            'content': content
        }
        return this.api.put('/patient/diary/', data);
    }


    changeEmail(id, newEmail) {
        let data = {
            'id': id,
            'newEmail': newEmail
        };
        return this.api.post('/patient/changeEmail/', data);
    }
}