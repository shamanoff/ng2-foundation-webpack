"use strict";
var router_1 = require("@angular/router");
var userComponent_1 = require("../components/userComponent");
var mainComponent_1 = require("../components/mainComponent");
var userProfile_1 = require("../components/userProfile");
var createUser_1 = require("../components/createUser");
var routs = [{
        path: '',
        component: mainComponent_1.MainComponent
    }, {
        path: 'users',
        component: userComponent_1.UserComponent,
    },
    {
        path: 'users/createUser',
        component: createUser_1.CreateUser,
        pathMatch: 'full'
    },
    {
        path: 'users/:id',
        component: userProfile_1.UserProfile
    }
];
exports.routing = router_1.RouterModule.forRoot(routs);
//# sourceMappingURL=app.routs.js.map