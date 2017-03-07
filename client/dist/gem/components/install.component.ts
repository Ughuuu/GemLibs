import { Component } from '@angular/core';
import { AppConstants } from '../constants/app.constants';

@Component({
    selector: 'install',
    templateUrl: 'gem/templates/install.html'
})
export class InstallComponent {
    pink: string = AppConstants.pink;
    purple: string = AppConstants.purple;
    logo: string = AppConstants.logoPNGSrc;
    public constructor() {
    }

    sourcePage(){
        window.open('https://github.com/Ughuuu/GemMaker');
    }

    downloadPage(){
        window.open('https://www.dropbox.com/s/0xkht2sut7lm3er/gemBuild.zip?dl=0');
    }
}