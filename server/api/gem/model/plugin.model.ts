"use strict";

export default function (orm, db) {
  var Plugin = db.define('plugin', {
    name: { type: 'text', required: true, unique: true },
    version: { type: 'text', required: true },
    createdAt: { type: 'date', required: true, time: true }
  },
    {
      hooks: {
        beforeValidation: function () {
          this.createdAt = new Date();
        }
      },
      validations: {
        body: orm.enforce.ranges.length(1, 1024)
      },
      methods: {
        serialize: function () {
          var plugin = this;
          return new Promise((done, rejected) => {
            plugin.getMessage((err, msg) => {
              if (err) {
                console.log(err);
                rejected(err);
                return;
              }
              msg.getUser((err, user) =>{
                if (err) {
                  console.log(err);
                  rejected(err);
                  return;
                }
                done({
                  name: plugin.name,
                  content: msg.content,
                  version: plugin.version,
                  createdAt: plugin.createdAt,
                  username: user.username
                });
              });
            })
          });
        }
      }
    });
  Plugin.hasOne('message', db.models.message);
};