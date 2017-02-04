"use strict";

import { AppConstants } from '../constants/app.const';
import { DataBaseConstants } from '../constants/database.const';

import * as express from 'express';
var passport = require('passport');
import { LocalStrategy } from './strategy/local';
var flash = require('connect-flash');

var bcrypt = require('bcrypt-nodejs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

export class Authentificator {
    static init(app: express.Application) {
        app.use(cookieParser());
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());

        // required for passport
        app.use(session({ secret: DataBaseConstants.secret, saveUninitialized: true, resave: true }));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(flash());

        bcrypt.genSaltSync(10);

        // passport strategy
        if (AppConstants.loginStrategy == 'local') {
            LocalStrategy.init(app);
        } else {
            console.log('Cannot find strategy for authentification');
        }
    }
}