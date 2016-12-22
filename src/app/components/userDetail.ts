///<reference path="../../../node_modules/@types/node/index.d.ts"/>
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {User} from '../models/users';
import {Router}from '@angular/router';

@Component({
    selector: 'user-details',
    template: require('../views/userComponent.html')
    // templateUrl: 'app.component.html'
})
export class UserDetail {
    public isEditable: boolean = false;

    @Output() onRemove = new EventEmitter<User>();

    @Input()user: User;
    constructor(private router:Router) {
       console.log(this.user);
    }


    editUser() {
        this.isEditable = !this.isEditable;
    }

    showProfile(){
        this.router.navigate(['/users', this.user.id])
    }

    remove() {
        this.onRemove.emit(this.user);
    }

    nameChanged(input:HTMLInputElement, name:string){
        if(name.length>5){
            this.user.name = name;
            input.style.border = '';

        }else {
            input.style.border = '1px solid red';
        }
        console.log(name);
    }
}