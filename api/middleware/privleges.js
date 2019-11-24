let routes = ['/article', '/category', '/page'];

let privs = (req, res, next) => {
    /* this middleware checks if user is logged in */
    if (getKeys().filter(key => key.key == req.body.key).length > 0) next();
};

module.exports = require('express')
    .Router()
    .post(routes, (req, res, next) => privs(req, res, next))
    .put(routes, (req, res, next) => privs(req, res, next))
    .delete(routes, (req, res, next) => privs(req, res, next));
