import { SignupConstants } from '../constants/signup.constants';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MdDialog } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginComponent } from './login.component';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'signup',
    templateUrl: 'gem/templates/signup.html',
    entryComponents: [LoginComponent]
})
export class SignUpComponent {
    private signupUrl: string = '/signup';
    public form = this.fb.group({
        username: ["", Validators.required],
        password: ["", Validators.required],
        email: ["", Validators.required]
    });
    emailPlaceholder: string = SignupConstants.emailPlacehoder;
    userPlaceholder: string = SignupConstants.userPlacehoder;
    passwordPlaceholder: string = SignupConstants.passwordPlaceholder;
    messages: string[];

    public constructor(private http: Http, public dialog: MdDialog, public fb: FormBuilder) {
    }

    doSubmit() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post(this.signupUrl, JSON.stringify(this.form.value), options)
            .subscribe(res => {
                this.messages = JSON.parse(res.text());
                if (this.messages[0] == 'Success') {
                    this.dialog.closeAll();
                    this.dialog.open(LoginComponent);
                }
            });
    }
}