"use strict";
var bcrypt = require('bcrypt-nodejs');
class AppConstants {
}
AppConstants.root = process.cwd();
AppConstants.mode = (process.env.NODE_ENV === 'production') ? true : false;
AppConstants.clientFiles = AppConstants.mode ? '/client/dist/' : '/client/dev/';
AppConstants.port = process.env.PORT || 3333;
AppConstants.loginStrategy = AppConstants.mode ? process.env.LOGIN_STRATEGY : 'local';
AppConstants.salt = '$2a$10$bzx5LVhBkWGYtpB7mVRNEO8AwX45m6VVupNQ4sf8lMT24IBVIv0XS';
AppConstants.recreateDB = (process.env.NODE_ENV === 'production') ? false : true;
exports.AppConstants = AppConstants;
//# sourceMappingURL=app.const.js.map