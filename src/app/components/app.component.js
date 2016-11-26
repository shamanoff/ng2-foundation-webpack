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
var userService_1 = require("../services/userService");
var AppComponent = (function () {
    function AppComponent(user$) {
        this.user$ = user$;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user$.getUsers()
            .then(function (users) {
            _this.users = users;
        })
            .catch(function (error) {
            console.log('error');
        });
    };
    AppComponent.prototype.onRemove = function (user) {
        this.users = this.users.filter(function (_user) { return _user.id != user.id; });
    };
    AppComponent.prototype.saveUsers = function () {
        this.user$.saveUsers(this.users)
            .then(function (result) {
            window.location.href = window.location.origin;
        })
            .catch(function (error) {
            console.log('error');
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: require('../views/app.component.html'),
            providers: [userService_1.default]
        }), 
        __metadata('design:paramtypes', [userService_1.default])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map