import * as express from 'express';
import { AppRoutes } from '../api/gem/routes/app.routes';
import { AppConstants } from '../constants/app.const';

export class Router {
  static init(app: express.Application) {
    AppRoutes.init(app);
    app.get('**', function (req, res) {
      res.sendFile(AppConstants.root + AppConstants.clientFiles + 'index.html');
    });
  }
};