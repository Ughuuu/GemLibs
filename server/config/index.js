"use strict";
const database_conf_1 = require("./database.conf");
const routes_conf_1 = require("./routes.conf");
const database_const_1 = require("../constants/database.const");
class SetupConfig {
    static init(app) {
        database_conf_1.DataBaseConfig.init(app, database_const_1.DataBaseConstants.dbUrl);
        routes_conf_1.RoutesConfig.init(app);
    }
}
exports.SetupConfig = SetupConfig;
;
