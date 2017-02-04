"use strict";

import * as express from 'express';
const strategy = require('passport-local').Strategy
import { DataBaseConfig } from '../../config/database.conf';
var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');
import { AppConstants } from '../../constants/app.const';

export class LocalStrategy {
    static init(app: express.Application) {
        // login
        passport.use('login', new strategy({
            passReqToCallback: true
        },
            function (req, username, password, done) {
                DataBaseConfig.get().models.user.one({ username: username }, function (err, user) {
                    if (err) {
                        return done(null, false, req.flash('message', err.msg));
                    }
                    // doesn't exist
                    if (user == null || user.username != username) {
                        return done(null, false, req.flash('message', 'User Not Found'));
                    }
                    // wrong password
                    if (bcrypt.hashSync(password, AppConstants.salt) != user.password) {
                        return done(null, false, req.flash('message', 'Invalid Password'));
                    }
                    return done(null, user);
                });
            }
        ));
        // sign up
        passport.use('signup', new strategy({
            passReqToCallback: true
        },
            function (req, username, password, done) {
                if(password == null || password == ''){
                    return done(null, false, req.flash('message', 'Password cannot be empty'));
                }
                if(password.length < 6){
                    return done(null, false, req.flash('message', 'Password must have minimal size of 6'));
                }
                DataBaseConfig.get().models.user.one({ username: username }, function (err, user) {
                    if (err) {
                        return done(null, false, req.flash('message', err.message));
                    }
                    // already exists
                    if (user != null) {
                        return done(null, false, req.flash('message', 'User Already Exists.'));
                    } else {
                        DataBaseConfig.get().models.role.one({ type: 'user' }, function (err, userRole) {
                            userRole.createUser(username, bcrypt.hashSync(password, AppConstants.salt), req.body.email)
                            .then(user => done(null, user, req.flash('message','Success')))
                            .catch(err => done(null, false, req.flash('message', err.message)));
                        });
                    }
                });
            }));
        // session track
        passport.serializeUser(function (user, done) {
            done(null, user._id);
        });

        passport.deserializeUser(function (id, done) {
            DataBaseConfig.get().models.user.get(id, function (err, user) {
                done(err, user);
            });
        });
    }
}