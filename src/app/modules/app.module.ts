import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {UserComponent} from '../components/userComponent';
import {AppComponent}   from '../components/app.component';
import {HttpModule}from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [AppComponent, UserComponent],
    bootstrap: [AppComponent]

})
export class AppModule {
}