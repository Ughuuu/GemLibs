"use strict";
const app_const_1 = require("../constants/app.const");
const database_const_1 = require("../constants/database.const");
var passport = require('passport');
const local_1 = require("./strategy/local");
var flash = require('connect-flash');
var bcrypt = require('bcrypt-nodejs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
class Authentificator {
    static init(app) {
        app.use(cookieParser());
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
        // required for passport
        app.use(session({ secret: database_const_1.DataBaseConstants.secret, saveUninitialized: true, resave: true }));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(flash());
        bcrypt.genSaltSync(10);
        // passport strategy
        if (app_const_1.AppConstants.loginStrategy == 'local') {
            local_1.LocalStrategy.init(app);
        }
        else {
            console.log('Cannot find strategy for authentification');
        }
    }
}
exports.Authentificator = Authentificator;
//# sourceMappingURL=index.js.map