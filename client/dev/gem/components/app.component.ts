import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MdDialog } from '@angular/material';
import { AppConstants } from '../constants/app.constants';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signup.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: 'gem/templates/app.html',
    entryComponents: [LoginComponent, SignUpComponent]
})
export class AppComponent{
    blue: string = AppConstants.blue;
    logo: string = AppConstants.logoPNGSrc;
    logotext: string = AppConstants.homeButton;
    searchbarDefault: string = AppConstants.searchBarDefault;
    install: string = AppConstants.installButton;
    feature: string = AppConstants.featureButton;
    signup: string = AppConstants.signupButton;
    login: string = AppConstants.loginButton;
    searchText: string = "";

    public constructor(private router: Router, private titleService: Title, public dialog: MdDialog) {
        if(window.location.pathname == '/login'){
            this.logInAction();
        }else if(window.location.pathname == '/signup'){
            this.signUpAction();
        }else{
            this.router.navigateByUrl(window.location.pathname);
        }
    }

    public searchAction() {
        this.setTitle("GemLibs: Search");
        this.router.navigate(['/search', this.searchText]);
    }

    public homeAction() {
        this.setTitle("GemLibs: Home");
        this.router.navigateByUrl('/home');
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

    public isMobile(){
        return window.innerWidth < 800;
    }
}
