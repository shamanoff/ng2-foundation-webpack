"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var userDetail_1 = require('../components/userDetail');
var userComponent_1 = require('../components/userComponent');
var http_1 = require('@angular/http');
var app_routs_1 = require('../routs/app.routs');
var mainComponent_1 = require('../components/mainComponent');
var appComponent_1 = require("../components/appComponent");
var userProfile_1 = require("../components/userProfile");
var userService_1 = require("../services/userService");
var createUser_1 = require("../components/createUser");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routs_1.routing
            ],
            providers: [
                userService_1.default,
            ],
            declarations: [userComponent_1.UserComponent, userDetail_1.UserDetail, mainComponent_1.MainComponent, appComponent_1.AppComponent, userProfile_1.UserProfile, createUser_1.CreateUser],
            bootstrap: [appComponent_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map