/**
 * Created by Michael on 26/11/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/users';
import {error} from "util";
import 'rxjs/Rx';

@Injectable()
export default class UserService {
    // private url: string = 'https://team-bd0fe.firebaseio.com/';

    constructor(private http: Http) {

    }

    addUser(user:User) {
        const body = JSON.stringify(user);
        const headers = new Headers({
            'Content-Type':'application/json'
        });
     /*   const options = new RequestOptions({
            headers:headers
        });*/
         return this.http.post('https://team-bd0fe.firebaseio.com/data.json', body, {headers:headers})
             .map((data: Response) => data.json())
             .catch(this.handleError);

    }

    private handleError(error: any){
        console.log(error);
        return Observable.throw(error.json());
    }

    getUsers(){
        return this.http.get('https://team-bd0fe.firebaseio.com/data.json')
            .map((data:Response) =>{ let temp = data.json();
            let users: User[]=[];
            for(let user in temp){

                users.push(temp[user]);
            }return users;
        })
            .catch(this.handleError);
    }
}


