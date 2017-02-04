"use strict";
const plugin_model_1 = require("./plugin.model");
const user_model_1 = require("./user.model");
const message_model_1 = require("./message.model");
const role_model_1 = require("./role.model");
function default_1(orm, db) {
    plugin_model_1.default(orm, db);
    user_model_1.default(orm, db);
    message_model_1.default(orm, db);
    role_model_1.default(orm, db);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
;
