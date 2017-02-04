"use strict";

import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as compression from 'compression';
var zlib = require('zlib');
import { AppConstants } from '../constants/app.const';

export class RoutesConfig {
    static init(app: express.Application): void {
        let _root = process.cwd();
        let _nodeModules = '/node_modules/';

        app.use(compression({
            level: zlib.Z_BEST_COMPRESSION,
            threshold: '1kb'
        }));

        app.use(express.static(_root + _nodeModules));
        app.use(express.static(_root + AppConstants.clientFiles));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(morgan('dev'));
        app.use(helmet());
    }
};
