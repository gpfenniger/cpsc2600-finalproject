/**
 * Article Router
 * Supports GET, POST, PUT, DELETE, OPTIONS
 * @module api/routes/article
 */

const { get, getOne, save, remove, update } = require('../controllers/common');

module.exports = require('express')
    .Router()
    .get(['/article', '/article/:slug'], (req, res, next) => {
        req.params.slug
            ? getOne(Article, { slug: req.params.slug }, res, next)
            : get(Article, {}, res, next);
    })
    .post('/article', (req, res, next) => {
        save(
            Article({
                name: req.body.name,
                content: req.body.content,
                slug: req.body.name.toLowerCase().replace(' ', '_'),
                tags: req.body.tags
            }),
            res
        );
    })
    .put('/article', (req, res, next) => {})
    .delete('/article', (req, res) => {
        remove(Page, { slug: req.body.slug }, res);
    });
