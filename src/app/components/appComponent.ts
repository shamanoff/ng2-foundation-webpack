/**
 * Created by Michael on 30/11/2016.
 */
import {Component}from "@angular/core";

@Component({
    selector: 'app',
    template: `
<div class="top-bar">
  <div class="top-bar-left">
    <ul class="dropdown menu" data-dropdown-menu>
      <li class="menu-text">Site Title</li>
      <li>
        <a href="#">One</a>
        <ul class="menu vertical">
          <li><a href="#">One</a></li>
          <li><a href="#">Two</a></li>
          <li><a href="#">Three</a></li>
        </ul>
      </li>
      <li><a href="#">Two</a></li>
      <li><a href="#">Three</a></li>
    </ul>
  </div>
  <div class="top-bar-right">
    <ul class="menu">
      <li><input type="search" placeholder="Search"></li>
      <li><button type="button" class="button">Search</button></li>
    </ul>
  </div>
</div>

       <div class="top-bar">
            <div class="top-bar-left">
                <ul class="menu">
             <li routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" ><a routerLink="/">Main</a></li>
   <li routerLinkActive="active" [routerLinkActiveOptions]="{ exact: false }" ><a routerLink="users">Users</a></li>
                </ul>
            </div>
            <div class="top-bar-right">
                <ul class="menu">
                    <li><input type="search" placeholder="Search"></li>
                    <li>
                        <button type="button" class="button">Search</button>
                    </li>
                </ul>
            </div>
        </div>
<router-outlet></router-outlet>
                
`
})
export class AppComponent {

}