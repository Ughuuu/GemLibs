"use strict";
import { DataBaseConfig } from '../../../config/database.conf';
import { AppConstants } from '../../../constants/app.const';

export default function (orm, db) {
  db.define('role', {
    type: { type: 'text', required: true, unique: true },
  },
    {
      methods: {
        serialize: function () {
          return new Promise((done, reject) => done({ type: this.type }));
        },
        createUser: function (username: string, password: string, email: string) {
          var role = this;
          return new Promise((done, reject) => {
            DataBaseConfig.get().models.user.create({
              username: username,
              password: password,
              email: email,
              role_id: role._id
            }, function (err, user) {
              if (err) {
                console.log(err);
                reject(err);
                return;
              }
              user.setRole(role, err => {
                if(err){
                  console.log(err);
                  reject(err);
                  return;
                }
                user.save(err =>{
                  if(err){
                    console.log(err);
                    reject(err);
                    return;
                  }
                  done(user);
                })
              });
            });
          })
        }
      }
    });
};