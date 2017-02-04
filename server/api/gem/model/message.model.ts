"use strict";
import { DataBaseConfig } from '../../../config/database.conf';
import { AppConstants } from '../../../constants/app.const';

var moment = require('moment');

export default function (orm, db) {
  var Model = db.define('message', {
    title: { type: 'text', required: true },
    content: { type: 'text', required: true, big: true },
    createdAt: { type: 'date', required: true, time: true },
  },
    {
      hooks: {
        beforeValidation: function () {
          this.createdAt = new Date();
        }
      },
      validations: {
        content: orm.enforce.ranges.length(1, 1024)
      },
      methods: {
        serialize: function () {
          var message = this;
          return new Promise((done, reject) => {
            message.getUser(function (err, user) {
              if (err) {
                console.log(err.msg);
                reject(err);
                return;
              }
              done({
                title: message.title,
                content: message.content,
                createdAt: moment(message.createdAt).fromNow(),
                createdBy: user.username
              });
            });
          });
        },
        createPlugin: function (name: string, version: string) {
          var thisCopy = this;
          return new Promise((done, reject) => {
            DataBaseConfig.get().models.message.one({ title: thisCopy.title }, (err, message) => {
              DataBaseConfig.get().models.plugin.create({
                name: name,
                version: version
              }, function (err) {
                if (err) {
                  console.log(err);
                  reject(err);
                  return;
                }
                DataBaseConfig.get().models.plugin.one({ name: name }, (err, plugin) => {
                  if (err) {
                    console.log(err);
                    reject(err);
                    return;
                  }
                  plugin.setMessage(message, err => {
                    if (err) {
                      console.log(err);
                      reject(err);
                      return;
                    }
                    plugin.save(err => {
                      if (err) {
                        console.log(err);
                        reject(err);
                        return;
                      }
                      plugin.getMessage((err, msg) => {
                        if (err) {
                          console.log(err);
                          return;
                        }
                        console.log(msg);
                      })
                      done(plugin);
                    })
                  });
                });
              });
            });
          });
        }
      }
    });
  Model.hasOne('user', db.models.user, { required: true });
};
