"use strict";function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},__decorate=function(e,o,n,r){var t,p=arguments.length,m=p<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,n):r;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)m=Reflect.decorate(e,o,n,r);else for(var u=e.length-1;u>=0;u--)(t=e[u])&&(m=(p<3?t(m):p>3?t(o,n,m):t(o,n))||m);return p>3&&m&&Object.defineProperty(o,n,m),m},core_1=require("@angular/core"),flex_layout_1=require("@angular/flex-layout"),http_1=require("@angular/http"),forms_1=require("@angular/forms"),platform_browser_1=require("@angular/platform-browser");require("hammerjs");var material_1=require("@angular/material"),router_1=require("@angular/router"),forms_2=require("@angular/forms"),plugin_component_1=require("./gem/components/plugin.component"),app_component_1=require("./gem/components/app.component"),login_component_1=require("./gem/components/login.component"),install_component_1=require("./gem/components/install.component"),features_component_1=require("./gem/components/features.component"),home_component_1=require("./gem/components/home.component"),search_component_1=require("./gem/components/search.component"),signup_component_1=require("./gem/components/signup.component"),plugin_service_1=require("./gem/services/plugin.service"),index_1=require("./gem/routes/index");require("rxjs/add/operator/map"),require("rxjs/add/operator/switchMap");var AppModule=function e(){_classCallCheck(this,e)};AppModule=__decorate([core_1.NgModule({imports:[platform_browser_1.BrowserModule,forms_1.FormsModule,forms_2.ReactiveFormsModule,http_1.HttpModule,material_1.MaterialModule.forRoot(),flex_layout_1.FlexLayoutModule.forRoot(),router_1.RouterModule.forRoot(index_1.AppRoutes)],providers:[plugin_service_1.PluginService,platform_browser_1.Title,login_component_1.LoginComponent,signup_component_1.SignUpComponent],declarations:[plugin_component_1.PluginComponent,app_component_1.AppComponent,login_component_1.LoginComponent,install_component_1.InstallComponent,features_component_1.FeaturesComponent,home_component_1.HomeComponent,search_component_1.SearchComponent,signup_component_1.SignUpComponent],bootstrap:[app_component_1.AppComponent],entryComponents:[login_component_1.LoginComponent,signup_component_1.SignUpComponent]})],AppModule),exports.AppModule=AppModule;