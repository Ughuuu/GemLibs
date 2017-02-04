"use strict";

import * as express from 'express';
import { DataBaseConfig } from './database.conf';
import { RoutesConfig } from './routes.conf';
import { DataBaseConstants } from '../constants/database.const';

export class SetupConfig {
  static init(app: express.Application): void {
      DataBaseConfig.init(app, DataBaseConstants.dbUrl);
      RoutesConfig.init(app);
  }
};
