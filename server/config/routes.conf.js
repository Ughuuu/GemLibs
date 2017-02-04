"use strict";
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
var zlib = require('zlib');
const app_const_1 = require("../constants/app.const");
class RoutesConfig {
    static init(app) {
        let _root = process.cwd();
        let _nodeModules = '/node_modules/';
        app.use(compression({
            level: zlib.Z_BEST_COMPRESSION,
            threshold: '1kb'
        }));
        app.use(express.static(_root + _nodeModules));
        app.use(express.static(_root + app_const_1.AppConstants.clientFiles));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(morgan('dev'));
        app.use(helmet());
    }
}
exports.RoutesConfig = RoutesConfig;
;
//# sourceMappingURL=routes.conf.js.map