"use strict";
const app_routes_1 = require("../api/gem/routes/app.routes");
const app_const_1 = require("../constants/app.const");
class Router {
    static init(app) {
        app_routes_1.AppRoutes.init(app);
        app.get('**', function (req, res) {
            res.sendFile(app_const_1.AppConstants.root + app_const_1.AppConstants.clientFiles + 'index.html');
        });
    }
}
exports.Router = Router;
;
