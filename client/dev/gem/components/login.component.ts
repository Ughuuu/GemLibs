import { LoginConstants } from '../constants/login.constants';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MdDialog } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: 'gem/templates/login.html'
})
export class LoginComponent {
    private loginUrl: string = '/login';
    public form = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    userPlaceholder: string = LoginConstants.userPlacehoder;
    passwordPlaceholder: string = LoginConstants.passwordPlaceholder;
    messages: string[];

    public constructor(private router: Router, private http: Http, public dialog: MdDialog, public fb: FormBuilder) {
    }

    doSubmit() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post(this.loginUrl, JSON.stringify(this.form.value), options)
            .subscribe(res => {
                this.messages = JSON.parse(res.text());
                if (this.messages[0] == 'Success') {
                    this.dialog.closeAll();
                    this.router.navigateByUrl('/home');
                }
            });
    }
}