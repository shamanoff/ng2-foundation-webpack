
import {ModuleWithProviders} from "@angular/core";

import {Routes, RouterModule} from "@angular/router";
import {UserComponent} from "../components/userComponent";
import {MainComponent} from "../components/mainComponent";
import {UserDetail} from "../components/userDetail";
import {UserProfile} from "../components/userProfile";
import {CreateUser} from "../components/createUser";

const routs:Routes = [{
    path:'',
    component:MainComponent
},{
    path:'users',
    component:UserComponent,


},
    {
        path:'users/createUser',
        component:CreateUser,
        pathMatch:'full'
    },
    {
        path:'users/:id',
        component:UserProfile

    }

];
export const routing:ModuleWithProviders = RouterModule.forRoot(routs);