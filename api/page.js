const { getKey } = require('./user');
const { pageParams } = require('./validation');
const { Page } = require('../database/models/page');
exports.pageRouter = require('express')
    .Router()
    .get(['/page', '/page/:name'], (req, res) => {
        Page.findOne(
            req.params.name ? { name: req.params.name } : {}
        ).then(doc => res.send(doc));
    })
    .post('/page', pageParams, (req, res) => {
        // check if logged in
    })
    .delete('/page/:name', (req, res) => {});
