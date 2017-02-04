"use strict";

import { Authentificator } from '../../../auth/index';
import { AuthRoutes } from './auth.routes';
import { PublicRoutes } from './public.routes';
import { SecureRoutes } from './secure.routes';
import * as express from 'express';
var passport = require('passport');


export class AppRoutes {
  static init(app: express.Application) {
    Authentificator.init(app);
    AuthRoutes.initAsync(app);
    PublicRoutes.init(app);
    SecureRoutes.init(app, AuthRoutes.isAuthenticated);
  }
};