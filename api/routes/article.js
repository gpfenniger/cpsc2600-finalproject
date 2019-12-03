/**
 * Article Router
 * Supports GET, POST, PUT, DELETE, OPTIONS
 * @module api/routes/article
 */

const { remove } = require('../controllers/common');
const {
    getArticle,
    getArticles,
    updateArticle,
    saveArticle,
    removeArticle
} = require('../controllers/article');

module.exports = require('express')
    .Router()
    .get(['/article', '/article/:slug'], (req, res, next) => {
        req.params.slug ? getArticle(req, res, next) : getArticles(res, next);
    })
    .post('/article', (req, res, next) => {
        saveArticle(req)
            .then(() => res.status(201))
            .catch(err => next(err));
    })
    .put('/article', (req, res, next) => {
        updateArticle(req)
            .then(() => res.status(200))
            .catch(err => next(err));
    })
    .delete('/article', (req, res, next) => {
        removeArticle(req.body.slug)
            .then(() => res.status(200))
            .catch(err => next(err));
    });
