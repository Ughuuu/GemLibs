"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},__decorate=function(e,t,r,n){var o,a=arguments.length,u=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(u=(a<3?o(u):a>3?o(t,r,u):o(t,r))||u);return a>3&&u&&Object.defineProperty(t,r,u),u},__metadata=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),http_1=require("@angular/http"),UserService=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"getAll",value:function(){return this.http.get("/api/users",this.jwt()).map(function(e){return e.json()})}},{key:"getById",value:function(e){return this.http.get("/api/users/"+e,this.jwt()).map(function(e){return e.json()})}},{key:"create",value:function(e){return this.http.post("/api/users",e,this.jwt()).map(function(e){return e.json()})}},{key:"update",value:function(e){return this.http.put("/api/users/"+e.id,e,this.jwt()).map(function(e){return e.json()})}},{key:"delete",value:function(e){return this.http.delete("/api/users/"+e,this.jwt()).map(function(e){return e.json()})}},{key:"jwt",value:function(){var e=JSON.parse(localStorage.getItem("currentUser"));if(e&&e.token){var t=new http_1.Headers({Authorization:"Bearer "+e.token});return new http_1.RequestOptions({headers:t})}}}]),e}();UserService=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],UserService),exports.UserService=UserService;