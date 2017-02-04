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
const signup_constants_1 = require("../constants/signup.constants");
const core_1 = require("@angular/core");
const material_1 = require("@angular/material");
const forms_1 = require("@angular/forms");
const login_component_1 = require("./login.component");
const http_1 = require("@angular/http");
let SignUpComponent = class SignUpComponent {
    constructor(http, dialog, fb) {
        this.http = http;
        this.dialog = dialog;
        this.fb = fb;
        this.signupUrl = '/signup';
        this.form = this.fb.group({
            username: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required],
            email: ["", forms_1.Validators.required]
        });
        this.emailPlaceholder = signup_constants_1.SignupConstants.emailPlacehoder;
        this.userPlaceholder = signup_constants_1.SignupConstants.userPlacehoder;
        this.passwordPlaceholder = signup_constants_1.SignupConstants.passwordPlaceholder;
    }
    doSubmit() {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        this.http.post(this.signupUrl, JSON.stringify(this.form.value), options)
            .subscribe(res => {
            this.messages = JSON.parse(res.text());
            if (this.messages[0] == 'Success') {
                this.dialog.closeAll();
                this.dialog.open(login_component_1.LoginComponent);
            }
        });
    }
};
SignUpComponent = __decorate([
    core_1.Component({
        selector: 'signup',
        templateUrl: 'gem/templates/signup.html',
        entryComponents: [login_component_1.LoginComponent]
    }),
    __metadata("design:paramtypes", [http_1.Http, material_1.MdDialog, forms_1.FormBuilder])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
