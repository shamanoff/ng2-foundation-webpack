/**
 * Created by Michael on 30/11/2016.
 */
import {Component}from "@angular/core";

@Component({
    selector: 'app',
    template: `

       <div class="top-bar">
            <div class="top-bar-left">
                <ul class="menu">
             <li routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" ><a routerLink="/">Main</a></li>
   <li routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" ><a routerLink="/users">Users</a></li>
   <li routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" ><a routerLink="/users/createUser">Create New User</a></li>
                </ul>
            </div>
            
            <div class="top-bar-right">
                
            </div>
        </div>
        
        
        <ul class="accordion" data-accordion>
            <li class="accordion-item is-active" data-accordion-item>
               <a href="#" class="accordion-title">Accordion 1</a>
               <div class="accordion-content" data-tab-content>
                  <p> I would start in the open state, due to using the active</p>
                </div>
             </li>
    <li class="accordion-item" data-accordion-item>
               <a href="#" class="accordion-title">Accordion 1</a>
               <div class="accordion-content" data-tab-content>
                  <p> I would start in the open state, due to using the active</p>
                </div>
             </li>
               <li class="accordion-item" data-accordion-item>
               <a href="#" class="accordion-title">Accordion 1</a>
               <div class="accordion-content" data-tab-content>
                  <p> I would start in the open state, due to using the active</p>
                </div>
             </li>
        </ul>
        
        <div class="slider" data-slider data-initial-start="25" data-initial-end="75">
  <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
  <span class="slider-fill" data-slider-fill></span>
  <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
  <input type="hidden">
  <input type="hidden">
</div>
        
        
<router-outlet></router-outlet>
                
`
})
export class AppComponent {

}