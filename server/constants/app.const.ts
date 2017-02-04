var bcrypt = require('bcrypt-nodejs');

export class AppConstants {
    static root = process.cwd();
    static mode: boolean = (process.env.NODE_ENV === 'production') ? true : false;
    static clientFiles = AppConstants.mode ? '/client/dist/' : '/client/dev/';
    static port: any = process.env.PORT || 3333;
    static loginStrategy: string = AppConstants.mode ? process.env.LOGIN_STRATEGY : 'local';
    static salt: any = '$2a$10$bzx5LVhBkWGYtpB7mVRNEO8AwX45m6VVupNQ4sf8lMT24IBVIv0XS';
    static recreateDB: boolean = (process.env.NODE_ENV === 'production') ? false : true;
}