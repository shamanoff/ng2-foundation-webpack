/**
 * Created by Michael on 26/11/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/users';
import {error} from "util";

@Injectable()
export default class userService {
    private url: string = 'http://jsonplaceholder.typicode.com/users';

    constructor(private http: Http) {

    }

    getUsers(): Promise<User[]> {
        return new Promise((resolve, reject) => {

            this.http
                .get(this.url)
                .subscribe(
                    (data: Response) => {
                        let users: User[] = <User[]>data.json();
                        resolve(users);
                    },
                    (error: any) => {
                        reject(error);
                    }
                )
        })
    }

 /*   saveUsers(users: User[]): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(true)
            },2000);
        } )
    }*/
    saveUsers(users: User[]): Promise<boolean> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return new Promise((resolve, reject) => {
            this.http
                .post(this.url, users, options)
                .subscribe(
                    (data: Response) => {
                        let result: boolean = <boolean>data.json();
                        resolve(users);
                    },
                    (error: any) => {
                        reject(error);
                    });

        } )
    }
}


