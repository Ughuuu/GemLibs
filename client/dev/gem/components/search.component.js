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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const plugin_model_1 = require("../models/plugin.model");
const http_1 = require("@angular/http");
let SearchComponent = class SearchComponent {
    constructor(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.searchUrl = '/search';
        this.plugins = [];
        for (var j = 0; j < 10; j++) {
            var plug = new plugin_model_1.Plugin(1, 'Best Plugin 123', '1.0.0', new Date(), 'This is my plugin.', 'user1');
            var str = '';
            for (var i = 0; i < 300; i++) {
                str += 'a';
            }
            plug.content = str;
            this.plugins.push(plug);
        }
    }
    ngOnInit() {
        this.route.params
            .subscribe((params) => this.getAll(params['plugin']));
    }
    getAll(searchText) {
        console.log(this.searchUrl + '?searchText=' + searchText + '');
        this.http.get(this.searchUrl + '?searchText=' + searchText + '').subscribe(res => console.log(res));
        //.subscribe(res => {
        //  this.messages = JSON.parse(res.text());
        //  if (this.messages[0] == 'Success') {
        //    this.dialog.closeAll();
        //    this.router.navigateByUrl('/home');
        //  }
        //});
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
