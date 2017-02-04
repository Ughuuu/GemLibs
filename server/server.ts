'use strict';

if (process.env.NODE_ENV === 'production')
    require('newrelic');

import { AppConstants } from './constants/app.const';
import * as express from 'express';
var http = require('http');
var os = require('os');
import { SetupConfig } from './config/index';
import { Router } from './routes/index';
import 'rxjs/Rx';

const app = express();

SetupConfig.init(app);
Router.init(app);

http.createServer(app)
    .listen(AppConstants.port, () => {
        console.log('Started running @: ' + os.hostname() + ' on port: ' + AppConstants.port + ' with environment: ' + process.env.NODE_ENV);
    });
