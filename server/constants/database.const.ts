import { AppConstants } from '../constants/app.const';

export class DataBaseConstants {
    static dbUrl: string = AppConstants.mode ? process.env.DB_URL :"mongodb://ddaian:nuarePAROLA@ds159328.mlab.com:59328/worldpath";
    static secret: string = "secret-key-123";
}