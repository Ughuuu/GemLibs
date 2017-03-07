"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../auth/index");
const auth_routes_1 = require("./auth.routes");
const public_routes_1 = require("./public.routes");
const secure_routes_1 = require("./secure.routes");
var passport = require('passport');
class AppRoutes {
    static init(app) {
        index_1.Authentificator.init(app);
        auth_routes_1.AuthRoutes.initAsync(app);
        public_routes_1.PublicRoutes.init(app);
        secure_routes_1.SecureRoutes.init(app, auth_routes_1.AuthRoutes.isAuthenticated);
    }
}
exports.AppRoutes = AppRoutes;
;
