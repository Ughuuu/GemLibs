"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},__decorate=function(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i},__metadata=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},login_constants_1=require("../constants/login.constants"),core_1=require("@angular/core"),material_1=require("@angular/material"),forms_1=require("@angular/forms"),http_1=require("@angular/http"),router_1=require("@angular/router"),LoginComponent=function(){function e(t,o,n,r){_classCallCheck(this,e),this.router=t,this.http=o,this.dialog=n,this.fb=r,this.loginUrl="/login",this.form=this.fb.group({username:["",forms_1.Validators.required],password:["",forms_1.Validators.required]}),this.userPlaceholder=login_constants_1.LoginConstants.userPlacehoder,this.passwordPlaceholder=login_constants_1.LoginConstants.passwordPlaceholder}return _createClass(e,[{key:"doSubmit",value:function(){var e=this,t=new http_1.Headers({"Content-Type":"application/json"}),o=new http_1.RequestOptions({headers:t});this.http.post(this.loginUrl,JSON.stringify(this.form.value),o).subscribe(function(t){e.messages=JSON.parse(t.text()),"Success"==e.messages[0]&&(e.dialog.closeAll(),e.router.navigateByUrl("/home"))})}}]),e}();LoginComponent=__decorate([core_1.Component({selector:"login",templateUrl:"gem/templates/login.html"}),__metadata("design:paramtypes",[router_1.Router,http_1.Http,material_1.MdDialog,forms_1.FormBuilder])],LoginComponent),exports.LoginComponent=LoginComponent;