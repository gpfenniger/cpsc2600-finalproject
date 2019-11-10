/*
    Blog Router should support full set of RESTful operations
    HTTP Requests:
        GET, POST, DELETE
        OPTIONS
*/

const blogRouter = require('express').Router();
const { check, validationResult } = require('express-validator');
const { Article } = require('../database/models/article');

blogRouter.get(['/article', '/article/:slug'], (req, res) => {
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
});

blogRouter.post(
    '/article',
    [
        check('name')
            .isLength({ min: 1, max: 30 })
            .escape(),
        check('content').escape()
    ],
    (req, res) => {
        // TODO change so user must be logged in
        let err = validationResult(req);
        if (err) {
            console.log(err);
            res.status(500).send('error');
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
    }
);

blogRouter.delete('/article/:slug', (req, res) => {
    // check if logged in
    // delete article by slug
    console.log('a delete request was made');
});

blogRouter.options('/article', (req, res) => {
    res.send(`
        Server: NodeJS v12.13.0 (Linux) OpenSSL/1.0.0g
        Allow: GET, POST, DELETE, OPTIONS
        Content Type: application/json
    `);
});

module.exports = blogRouter;
