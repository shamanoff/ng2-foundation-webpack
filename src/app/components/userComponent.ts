///<reference path="../../../node_modules/@types/node/index.d.ts"/>
import {Component, OnInit} from '@angular/core';
import { User} from '../models/users.ts';
import userService from "../services/userService";
import {error} from "util";
import {Observable} from "rxjs";

@Component({
    selector: 'users',
    template: require('../views/app.component.html'),
    providers: [userService]
    // templateUrl: 'app.component.html'
})
export class UserComponent implements OnInit{
    private users:User[];

    ngOnInit(){
        this.user$.getUsers().subscribe((users:Users[])=>{
            this.users = users;
            console.log(users);
        })
    }

    constructor(private user$: userService) {

    }

    onRemove(user:User) {
/*
        this.users = this.users.filter((_user)=>_user.id != user.id);
*/
    }

    saveUsers(){
   /*     this.user$.saveUsers(this.users)
            .then((result:boolean)=>{
               window.location.href = window.location.origin;
            })
            .catch((error:any)=>{
                console.log('error');
            })*/
    }



}