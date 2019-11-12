/*
    Blog Router should support full set of RESTful operations
    HTTP Requests:
        GET, POST, DELETE
        OPTIONS
*/

const { Article } = require('../database/models/article');
const { articleParams, checkValidationErrors } = require('./validation');

exports.blogRouter = require('express')
    .Router()
    .get(['/article', '/article/:slug'], (req, res) => {
        let params = {};
        if (req.params.slug) params.slug = req.params.slug;
        Article.find(params, (err, docs) => {
            if (err) {
                console.log(err);
                res.status(404).send('error');
            } else {
                res.status(200).send(docs);
            }
        });
    })
    .post('/article', articleParams, (req, res) => {
        // TODO change so user must be logged in
        if (checkValidationErrors(req)) {
            res.status(500).send('improper input');
        } else {
            Article({
                name: req.name,
                content: req.content,
                slug: req.name.toLower().replace(' ', '_'),
                tags: req.tags
            }).save(err => {
                if (err) console.log(err);
            });
        }
    })
    .delete('/article/:slug', (req, res) => {
        // check if logged in
        // delete article by slug
        console.log('a delete request was made');
    })
    .options('/article', (req, res) => {
        res.send(`
        Server: NodeJS v12.13.0 (Linux) OpenSSL/1.0.0g
        Allow: GET, POST, DELETE, OPTIONS
        Content Type: application/json
    `);
    });
