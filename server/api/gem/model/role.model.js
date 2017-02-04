"use strict";
const database_conf_1 = require("../../../config/database.conf");
function default_1(orm, db) {
    db.define('role', {
        type: { type: 'text', required: true, unique: true },
    }, {
        methods: {
            serialize: function () {
                return new Promise((done, reject) => done({ type: this.type }));
            },
            createUser: function (username, password, email) {
                var role = this;
                return new Promise((done, reject) => {
                    database_conf_1.DataBaseConfig.get().models.user.create({
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
                            if (err) {
                                console.log(err);
                                reject(err);
                                return;
                            }
                            user.save(err => {
                                if (err) {
                                    console.log(err);
                                    reject(err);
                                    return;
                                }
                                done(user);
                            });
                        });
                    });
                });
            }
        }
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
;
//# sourceMappingURL=role.model.js.map