"use strict";
const strategy = require('passport-local').Strategy;
const database_conf_1 = require("../../config/database.conf");
var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');
const app_const_1 = require("../../constants/app.const");
class LocalStrategy {
    static init(app) {
        // login
        passport.use('login', new strategy({
            passReqToCallback: true
        }, function (req, username, password, done) {
            database_conf_1.DataBaseConfig.get().models.user.one({ username: username }, function (err, user) {
                if (err) {
                    return done(null, false, req.flash('message', err.msg));
                }
                // doesn't exist
                if (user == null || user.username != username) {
                    return done(null, false, req.flash('message', 'User Not Found'));
                }
                // wrong password
                if (bcrypt.hashSync(password, app_const_1.AppConstants.salt) != user.password) {
                    return done(null, false, req.flash('message', 'Invalid Password'));
                }
                return done(null, user);
            });
        }));
        // sign up
        passport.use('signup', new strategy({
            passReqToCallback: true
        }, function (req, username, password, done) {
            if (password == null || password == '') {
                return done(null, false, req.flash('message', 'Password cannot be empty'));
            }
            if (password.length < 6) {
                return done(null, false, req.flash('message', 'Password must have minimal size of 6'));
            }
            database_conf_1.DataBaseConfig.get().models.user.one({ username: username }, function (err, user) {
                if (err) {
                    return done(null, false, req.flash('message', err.message));
                }
                // already exists
                if (user != null) {
                    return done(null, false, req.flash('message', 'User Already Exists.'));
                }
                else {
                    database_conf_1.DataBaseConfig.get().models.role.one({ type: 'user' }, function (err, userRole) {
                        userRole.createUser(username, bcrypt.hashSync(password, app_const_1.AppConstants.salt), req.body.email)
                            .then(user => done(null, user, req.flash('message', 'Success')))
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
            database_conf_1.DataBaseConfig.get().models.user.get(id, function (err, user) {
                done(err, user);
            });
        });
    }
}
exports.LocalStrategy = LocalStrategy;
