"use strict";
const app_const_1 = require("../constants/app.const");
class DataBaseConstants {
}
DataBaseConstants.dbUrl = app_const_1.AppConstants.mode ? process.env.DB_URL : "mongodb://ddaian:nuarePAROLA@ds159328.mlab.com:59328/worldpath";
DataBaseConstants.secret = "secret-key-123";
exports.DataBaseConstants = DataBaseConstants;
