import { AppConstants } from '../constants/app.const';

export class DataBaseConstants {
    static dbUrl: string = AppConstants.mode ? process.env.DB_URL :"mongodb://nae1:napocAPPS1@ds131109.mlab.com:31109/database1";
    static secret: string = "secret-key-123";
}