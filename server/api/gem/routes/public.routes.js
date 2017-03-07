"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var orm = require('orm');
class PublicRoutes {
    static init(app) {
        app.get('/search', function (req, res) {
            var searchText = '';
            if (req.query.searchText != null) {
                searchText = req.query.searchText;
            }
            req.db.models.plugin.find({ name: orm.like(searchText) }).run(function (err, plugins) {
                if (err) {
                    console.log(err);
                    return;
                }
                var n = plugins.length;
                var acumulator = [];
                var acumulatorFunction = function (msg) {
                    acumulator.push(msg);
                    n--;
                    if (n == 0) {
                        res.json(acumulator);
                    }
                };
                plugins.map(plugin => plugin.serialize().then(acumulatorFunction));
            });
        });
    }
}
exports.PublicRoutes = PublicRoutes;
;
