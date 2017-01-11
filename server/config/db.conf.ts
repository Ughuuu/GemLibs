"use strict";

import * as mongoose from 'mongoose';
var dbConst = require('../constants/db.json');

export class DBConfig {
    static init():void {
      const URL = (process.env.NODE_ENV === 'production') ? dbConst.mongodb
                                                          : dbConst.mongodb;

      mongoose.connect(URL);
      mongoose.connection.on('error', console.error.bind(console, 'An error ocurred with the DB connection: '));
    }
};
