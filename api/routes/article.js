/**
 * Article Router
 * Supports GET, POST, PUT, DELETE, OPTIONS
 * @module api/routes/article
 */

const { get, save, remove } = require('../controllers/common');
const { getArticle, updateArticle } = require('../controllers/article');
const Article = require('../../database/models/article');

module.exports = require('express')
    .Router()
    .get(['/article', '/article/:slug'], (req, res, next) => {
        req.params.slug
            ? getArticle(req, res, next)
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
            res,
            next
        );
    })
    .put('/article', (req, res, next) => {
        updateArticle(req, res, next);
    })
    .delete('/article', (req, res, next) => {
        remove(Page, { slug: req.body.slug }, res, next);
    });
