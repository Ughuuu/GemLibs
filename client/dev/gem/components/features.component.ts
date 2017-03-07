import { Component } from '@angular/core';
import { AppConstants } from '../constants/app.constants';

@Component({
    selector: 'features',
    templateUrl: 'gem/templates/features.html'
})
export class FeaturesComponent {
    pink: string = AppConstants.pink;
    purple: string = AppConstants.purple;

    public constructor() {
    }
}