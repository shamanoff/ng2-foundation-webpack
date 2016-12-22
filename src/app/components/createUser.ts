/**
 * Created by Michael on 17/12/2016.
 */
import { Component, OnInit } from '@angular/core';
import {User} from "../models/users";
import UserService from "../services/userService";


@Component({
    selector: 'create-user',

    template: require('../views/createUserComponent.html'),

})
export class CreateUser implements OnInit {

    private user:User;

    constructor(private userService:UserService) {
        this.user = new User();
    }

    ngOnInit() { }

    createUser(){
        this.userService.addUser(this.user)
            .subscribe(()=>{},()=>{},()=>{
            this.user = new User;
            })
    }

 /*   onSubmit(event:Event){
        event.preventDefault();
    }*/

}