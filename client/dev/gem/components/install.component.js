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
const app_constants_1 = require("../constants/app.constants");
let InstallComponent = class InstallComponent {
    constructor() {
        this.pink = app_constants_1.AppConstants.pink;
        this.purple = app_constants_1.AppConstants.purple;
        this.logo = app_constants_1.AppConstants.logoPNGSrc;
    }
    sourcePage() {
        window.open('https://github.com/Ughuuu/GemMaker');
    }
    downloadPage() {
        window.open('https://www.dropbox.com/s/0xkht2sut7lm3er/gemBuild.zip?dl=0');
    }
};
InstallComponent = __decorate([
    core_1.Component({
        selector: 'install',
        templateUrl: 'gem/templates/install.html'
    }),
    __metadata("design:paramtypes", [])
], InstallComponent);
exports.InstallComponent = InstallComponent;
