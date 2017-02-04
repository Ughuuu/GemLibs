"use strict";
import { DataBaseConfig } from '../../../config/database.conf';
import { AppConstants } from '../../../constants/app.const';

var moment = require('moment');

export default function (orm, db) {
  var User = db.define('user', {
    username: { type: 'text', required: true, unique: true },
    password: { type: 'text', required: true },
    email: { type: 'text', required: true },
    createdAt: { type: 'date', required: true, time: true },
  },
    {
      hooks: {
        beforeValidation: function () {
          this.createdAt = new Date();
        }
      },
      validations: {
        username: orm.enforce.security.username(2, "^[a-z0-9_-]{2,15}$", "Name cannot be smaller than 2 or bigger than 15 characters. Name must have only letters or digits, _ or -."),
        email: orm.enforce.patterns.email("Email must have the structure of an email"),
      },
      methods: {
        serialize: function () {
          return new Promise((done, rejected) =>
            done({
              username: this.username,
              email: this.email,
              createdAt: moment(this.createdAt).fromNow()
            })
          );
        },
        createMessage: function (title: string, content: string) {
          var user = this;
          return new Promise((done, rejected) => {
            DataBaseConfig.get().models.message.create({
              title: title,
              content: content,
              user_id: user._id
            }, function (err, message) {
              if (err) {
                console.log(err);
                rejected(err);
                return;
              }
              message.setUser(user, err => {
                if (err) {
                  console.log(err);
                  rejected(err);
                  return;
                }
                message.save(err => {
                  if (err) {
                    console.log(err);
                    rejected(err);
                    return;
                  }
                  done(message);
                })
              });
            });
          });
        }
      }
    });
  User.hasOne('role', db.models.role, { required: true });
};
