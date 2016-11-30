/**
 * Created by Michael on 30/11/2016.
 */

import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({

    selector: 'user-profile',
    template: `<h1>hello</h1>
<button value="Go Back" (click)="goBack()" >Go Back</button>
`
})
export class UserProfile implements OnInit {
    constructor(private route:ActivatedRoute, private router: Router) { }

    ngOnInit() {
        debugger;
        console.log(this.route);
    }
    goBack(){
        this.router.navigate(['/users']);
    }
}