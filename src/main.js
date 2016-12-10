"use strict";
require('core-js');
require('zone.js/dist/zone');
require('reflect-metadata');
require('foundation-sites/dist/foundation.css');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app/modules/app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
$(document).ready(function () {
    $(document).foundation();
});
//# sourceMappingURL=main.js.map