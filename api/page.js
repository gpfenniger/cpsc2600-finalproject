const { pageParams, checkValidationErrors } = require('./validation');
const { Page } = require('../database/models/page');
module.exports = require('express')
    .Router()
    .get(['/page', '/page/:slug'], (req, res) => {
        Page.findOne(
            req.params.slug ? { slug: req.params.slug } : {}
        ).then(doc => res.send(doc));
    })
    .post('/page', pageParams, (req, res) => {
        // check if logged in
        if (checkValidationErrors(req)) {
            res.status(500).send('improper input');
        } else {
            Page({
                name: req.body.name,
                content: req.body.content,
                slug: req.body.name.toLowerCase().replace(' ', '_')
            }).save(err => {
                if (err) console.log(err);
            });
        }
    })
    .delete('/page/:name', (req, res) => {});
