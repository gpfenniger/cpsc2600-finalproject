const { getKey } = require('./user');
const { pageParams } = require('./validation');
const { Page } = require('../database/models/page');
exports.pageRouter = require('express')
    .Router()
    .get(['/page', '/page/:slug'], (req, res) => {
        Page.findOne(
            req.params.slug ? { slug: req.params.slug } : {}
        ).then(doc => res.send(doc));
    })
    .post('/page', pageParams, (req, res) => {
        // check if logged in
    })
    .delete('/page/:name', (req, res) => {});
