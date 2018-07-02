import * as moment from 'moment';
moment.locale('fr');

export class UserModel {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    hashed_password: string;
}






