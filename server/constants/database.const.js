"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../constants/app.const");
class DataBaseConstants {
}
DataBaseConstants.dbUrl = app_const_1.AppConstants.mode ? process.env.DB_URL : "mongodb://nae1:napocAPPS1@ds131109.mlab.com:31109/database1";
DataBaseConstants.secret = "secret-key-123";
exports.DataBaseConstants = DataBaseConstants;
