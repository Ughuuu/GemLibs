"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},__decorate=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},__metadata=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__param=function(e,t){return function(n,r){t(n,r,e)}};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),http_1=require("@angular/http");require("rxjs/add/operator/map");var PluginService=PluginService_1=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"get",value:function(e){return this.http.get(PluginService_1.ENDPOINT.replace(":text",e)).map(function(e){return null!=e?JSON.parse(e.text()):null})}},{key:"add",value:function(e){var t=new http_1.Headers;return t.append("Content-Type","application/json"),this.http.post(PluginService_1.ENDPOINT.replace(":id",""),JSON.stringify(e),{headers:t}).map(function(e){return e.json()})}},{key:"remove",value:function(e){return this.http.delete(PluginService_1.ENDPOINT.replace(":id",e))}}]),e}();PluginService.ENDPOINT="/plugin/:text",PluginService=PluginService_1=__decorate([core_1.Injectable(),__param(0,core_1.Inject(http_1.Http)),__metadata("design:paramtypes",[http_1.Http])],PluginService),exports.PluginService=PluginService;var PluginService_1;