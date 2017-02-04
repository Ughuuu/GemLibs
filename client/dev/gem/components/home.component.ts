import { Component } from '@angular/core';
import { NavbarConstants } from '../constants/app.constants';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signup.component';
import { Title } from '@angular/platform-browser';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'gem/templates/home.html',
    entryComponents: [LoginComponent, SignUpComponent]
})
export class HomeComponent {
    logo: string = NavbarConstants.logoPNGSrc;

    public constructor(private router: Router, private titleService: Title, public dialog: MdDialog) {
        if(window.location.pathname == '/login'){
            this.logInAction();
        }else if(window.location.pathname == '/signup'){
            this.signUpAction();
        }
    }

    public signUpAction() {
        this.setTitle("GemLibs: Sign Up");
        this.dialog.open(SignUpComponent);
    }

    public logInAction() {
        this.setTitle("GemLibs: Log In");
        this.dialog.open(LoginComponent);
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
}