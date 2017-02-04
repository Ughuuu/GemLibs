"use strict";
const index_1 = require("../api/gem/model/index");
var orm = require('orm');
var bcrypt = require('bcrypt-nodejs');
const app_const_1 = require("../constants/app.const");
class DataBaseConfig {
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
            { type: 'user' }
        ], () => {
            DataBaseConfig.db.models.role.one({ type: 'admin' }, function (err, role) {
                role.createUser('admin1234567', bcrypt.hashSync('admin1234567', app_const_1.AppConstants.salt), 'a@a.com')
                    .then(DataBaseConfig.initMessage);
            });
            console.log('Users Table synced.');
        });
    }
    static afterSync() {
        DataBaseConfig.initRoles();
    }
    static init(app, url) {
        if (this.db != null) {
            return;
        }
        let db = orm.connect(url, function (err, db) {
            if (err)
                throw err;
            index_1.default(orm, db);
            if (app_const_1.AppConstants.recreateDB == true) {
                db.drop(function () {
                    db.sync(function (err) {
                        if (err)
                            throw err;
                        DataBaseConfig.afterSync();
                    });
                });
            }
            else {
                db.sync(function (err) {
                    if (err)
                        throw err;
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
    static get() {
        if (this.db != null) {
            return this.db;
        }
        return null;
    }
}
exports.DataBaseConfig = DataBaseConfig;
;
//# sourceMappingURL=database.conf.js.map