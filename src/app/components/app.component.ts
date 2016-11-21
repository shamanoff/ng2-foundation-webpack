///<reference path="../../../node_modules/@types/node/index.d.ts"/>
import {Component} from '@angular/core';
import {users, User} from './users';

@Component({
    selector: 'app',
    // template: '<h1>Hello Angular2!</h1>'
    template: require('../views/app.component.html')
    // templateUrl: 'app.component.html'
})
export class AppComponent {
    private users:User[] = users;

    userInfo(user:User) {
        alert(user.website);
    }

    removeUser(id:number) {
        this.users = this.users.filter((user)=>user.id != id);
    }

    editUser(){
}

}