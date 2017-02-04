"use strict";

import * as express from 'express';
var passport = require('passport');


export class AuthRoutes {
  static isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/');
  }

  static init(app: express.Application) {
    app.post('/login', passport.authenticate('login', {
      successRedirect: '/users',
      failureRedirect: '/login'
    }));

    app.get('/signup', function (req, res) {
    });

    app.post('/signup', passport.authenticate('signup', {
      successRedirect: '/login',
      failureRedirect: '/signup'
    })
    );
    app.get('/signout', function (req: any, res: any) {
      if (req.user != null) {
        req.logout();
      }
      res.redirect('/');
    });
  }

  static initAsync(app: express.Application) {
    app.post('/login', function (req: any, res, next) {
      passport.authenticate('login', function (err, user, info) {
        var msg = req.flash('message');
        if (info && info.message) {
          msg = msg.concat(info.message);
        }
        if (err) { return next(err); }
        if (!user) { return res.json(msg); }
        return res.json(['Success']);
      })(req, res, next);
    });

    app.get('/signup', function (req, res) {
    });

    app.post('/signup', function (req: any, res, next) {
      passport.authenticate('signup', function (err, user, info) {
        var msg = req.flash('message');
        if (info && info.message) {
          msg = msg.concat(info.message);
        }
        if (err) { return next(err); }
        return res.json(msg);
      })(req, res, next);
    });
    app.get('/signout', function (req: any, res: any) {
      let name = '';
      if (req.user != null) {
        name = req.user.username;
        req.logout();
      }
      return res.json(['You have been logged out ' + name]);
    });
  }
};