"use strict";
const database_conf_1 = require("../../../config/database.conf");
var moment = require('moment');
function default_1(orm, db) {
    var Model = db.define('message', {
        title: { type: 'text', required: true },
        content: { type: 'text', required: true, big: true },
        createdAt: { type: 'date', required: true, time: true },
    }, {
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
            createPlugin: function (name, version) {
                var thisCopy = this;
                return new Promise((done, reject) => {
                    database_conf_1.DataBaseConfig.get().models.message.one({ title: thisCopy.title }, (err, message) => {
                        database_conf_1.DataBaseConfig.get().models.plugin.create({
                            name: name,
                            version: version
                        }, function (err) {
                            if (err) {
                                console.log(err);
                                reject(err);
                                return;
                            }
                            database_conf_1.DataBaseConfig.get().models.plugin.one({ name: name }, (err, plugin) => {
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
                                        });
                                        done(plugin);
                                    });
                                });
                            });
                        });
                    });
                });
            }
        }
    });
    Model.hasOne('user', db.models.user, { required: true });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
;
//# sourceMappingURL=message.model.js.map