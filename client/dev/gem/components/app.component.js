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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const material_1 = require("@angular/material");
const app_constants_1 = require("../constants/app.constants");
const login_component_1 = require("./login.component");
const signup_component_1 = require("./signup.component");
const router_1 = require("@angular/router");
let AppComponent = class AppComponent {
    constructor(router, titleService, dialog) {
        this.router = router;
        this.titleService = titleService;
        this.dialog = dialog;
        this.blue = app_constants_1.AppConstants.blue;
        this.logo = app_constants_1.AppConstants.logoPNGSrc;
        this.logotext = app_constants_1.AppConstants.homeButton;
        this.searchbarDefault = app_constants_1.AppConstants.searchBarDefault;
        this.install = app_constants_1.AppConstants.installButton;
        this.feature = app_constants_1.AppConstants.featureButton;
        this.signup = app_constants_1.AppConstants.signupButton;
        this.login = app_constants_1.AppConstants.loginButton;
        this.searchText = "";
        if (window.location.pathname == '/login') {
            this.logInAction();
        }
        else if (window.location.pathname == '/signup') {
            this.signUpAction();
        }
        else {
            this.router.navigateByUrl(window.location.pathname);
        }
    }
    searchAction() {
        this.setTitle("GemLibs: Search");
        this.router.navigate(['/search', this.searchText]);
    }
    homeAction() {
        this.setTitle("GemLibs: Home");
        this.router.navigateByUrl('/home');
    }
    signUpAction() {
        this.setTitle("GemLibs: Sign Up");
        this.dialog.open(signup_component_1.SignUpComponent);
    }
    logInAction() {
        this.setTitle("GemLibs: Log In");
        this.dialog.open(login_component_1.LoginComponent);
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
    isMobile() {
        return window.innerWidth < 800;
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'gem/templates/app.html',
        entryComponents: [login_component_1.LoginComponent, signup_component_1.SignUpComponent]
    }),
    __metadata("design:paramtypes", [router_1.Router, platform_browser_1.Title, material_1.MdDialog])
], AppComponent);
exports.AppComponent = AppComponent;
