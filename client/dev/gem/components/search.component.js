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
const router_1 = require("@angular/router");
const http_1 = require("@angular/http");
let SearchComponent = class SearchComponent {
    constructor(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.searchUrl = '/search';
        this.searchText = '';
        this.pink = app_constants_1.AppConstants.pink;
        this.purple = app_constants_1.AppConstants.purple;
        this.plugins = [];
    }
    ngOnInit() {
        this.route.params
            .subscribe((params) => this.getAll(params['plugin']));
    }
    getPlugins(arr) {
        console.log(arr[0]);
        this.plugins = arr;
        //for(i=0;i<arr.)
    }
    getAll(searchText) {
        this.searchText = searchText;
        this.http.get(this.searchUrl + '?searchText=' + searchText + '').subscribe(res => this.getPlugins(JSON.parse(res.text())));
    }
};
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        templateUrl: 'gem/templates/search.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        http_1.Http])
], SearchComponent);
exports.SearchComponent = SearchComponent;
