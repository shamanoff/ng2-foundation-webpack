import 'core-js';
import 'zone.js/dist/zone';
import 'reflect-metadata';
import $ from 'jquery';


import 'foundation-sites/dist/foundation.css';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from './app/modules/app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
$(document).ready(function () {
    $(document).foundation();
});
