"use strict";

import * as express from 'express';
import GemModel from '../api/gem/model/index';
var orm = require('orm');
var bcrypt = require('bcrypt-nodejs');
import { AppConstants } from '../constants/app.const';

export class DataBaseConfig {
  private static db: any;

  static initMessage() {
    DataBaseConfig.db.models.user.one({ username: 'admin1234567' }, function (err, user) {
      if (err) {
        console.log(err);
        return;
      }
      user.createMessage('title', 'content')
        .then(msg => msg.createPlugin('AAA', '1.2.3'))
        .then()
        .catch(console.log);
      console.log('Message Table synced.');
    });
  }

  static initRoles() {
    DataBaseConfig.db.models.role.create([
      { type: 'admin' },
      { type: 'user' }], () => {
        DataBaseConfig.db.models.role.one({ type: 'admin' }, function (err, role) {
          role.createUser('admin1234567', bcrypt.hashSync('admin1234567', AppConstants.salt), 'a@a.com')
            .then(DataBaseConfig.initMessage);
        });
        console.log('Users Table synced.');
      });
  }

  static afterSync(): void {
    DataBaseConfig.initRoles();
  }

  static init(app: express.Application, url: string): void {
    if (this.db != null) {
      return;
    }
    let db = orm.connect(url, function (err, db) {
      if (err) throw err;
      GemModel(orm, db);
      if (AppConstants.recreateDB == true) {
        db.drop(function () {
          db.sync(function (err) {
            if (err) throw err;
            DataBaseConfig.afterSync();
          });
        });
      } else {
        db.sync(function (err) {
          if (err) throw err;
          DataBaseConfig.afterSync();
        });
      }
      DataBaseConfig.db = db;

      console.log('Database succesfuly initialized.');
    });
    let func = function (req, res, next) {
      req.db = db;
      return next();
    };
    app.use(func);
  }

  // return null or db from keyword
  static get(): any {
    if (this.db != null) {
      return this.db;
    }
    return null;
  }
};
