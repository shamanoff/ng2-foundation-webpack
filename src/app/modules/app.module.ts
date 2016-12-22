import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {UserDetail} from '../components/userDetail';
import {UserComponent}   from '../components/userComponent';
import {HttpModule}from '@angular/http';
import {routing}from '../routs/app.routs';
import { MainComponent}from '../components/mainComponent';
import {AppComponent} from "../components/appComponent";
import {UserProfile} from "../components/userProfile";
import UserService from "../services/userService";
import {CreateUser} from "../components/createUser";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers:[
        UserService,

    ],
    declarations: [UserComponent, UserDetail, MainComponent, AppComponent, UserProfile, CreateUser],
    bootstrap: [AppComponent]

})
export class AppModule {
}