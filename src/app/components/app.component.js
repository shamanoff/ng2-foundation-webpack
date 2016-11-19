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
var users_1 = require('./users');
var AppComponent = (function () {
    function AppComponent() {
        this.users = users_1.users;
    }
    AppComponent.prototype.userInfo = function (user) {
        alert(user.website);
    };
    AppComponent.prototype.removeUser = function (id) {
        this.users = this.users.filter(function (user) { return user.id != id; });
    };
    AppComponent.prototype.editUser = function (id) {
        this.users;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: require('../views/app.component.html')
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map