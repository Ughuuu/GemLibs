"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const flex_layout_1 = require("@angular/flex-layout");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const platform_browser_1 = require("@angular/platform-browser");
require("hammerjs");
const material_1 = require("@angular/material");
const router_1 = require("@angular/router");
const forms_2 = require("@angular/forms");
// Components
const plugin_component_1 = require("./gem/components/plugin.component");
const app_component_1 = require("./gem/components/app.component");
const login_component_1 = require("./gem/components/login.component");
const install_component_1 = require("./gem/components/install.component");
const features_component_1 = require("./gem/components/features.component");
const home_component_1 = require("./gem/components/home.component");
const search_component_1 = require("./gem/components/search.component");
const signup_component_1 = require("./gem/components/signup.component");
// Services
const plugin_service_1 = require("./gem/services/plugin.service");
// Router
const index_1 = require("./gem/routes/index");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            http_1.HttpModule,
            material_1.MaterialModule.forRoot(),
            flex_layout_1.FlexLayoutModule.forRoot(),
            router_1.RouterModule.forRoot(index_1.AppRoutes),
        ],
        providers: [
            plugin_service_1.PluginService,
            platform_browser_1.Title,
            login_component_1.LoginComponent,
            signup_component_1.SignUpComponent
        ],
        declarations: [
            plugin_component_1.PluginComponent,
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            install_component_1.InstallComponent,
            features_component_1.FeaturesComponent,
            home_component_1.HomeComponent,
            search_component_1.SearchComponent,
            signup_component_1.SignUpComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        entryComponents: [login_component_1.LoginComponent, signup_component_1.SignUpComponent]
    })
], AppModule);
exports.AppModule = AppModule;
