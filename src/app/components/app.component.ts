///<reference path="../../../node_modules/@types/node/index.d.ts"/>
import {Component} from '@angular/core';
import {users, User} from './users.ts';

@Component({
    selector: 'app',
    template: require('../views/app.component.html')
    // templateUrl: 'app.component.html'
})
export class AppComponent {
    private users:User[] = users;



    onRemove(user:User) {
        this.users = this.users.filter((_user)=>_user.id != user.id);
    }



}