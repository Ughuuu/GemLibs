'use strict';
if (process.env.NODE_ENV === 'production')
    require('newrelic');
const app_const_1 = require("./constants/app.const");
const express = require("express");
var http = require('http');
var os = require('os');
const index_1 = require("./config/index");
const index_2 = require("./routes/index");
require("rxjs/Rx");
const app = express();
index_1.SetupConfig.init(app);
index_2.Router.init(app);
http.createServer(app)
    .listen(app_const_1.AppConstants.port, () => {
    console.log('Started running @: ' + os.hostname() + ' on port: ' + app_const_1.AppConstants.port + ' with environment: ' + process.env.NODE_ENV);
});
