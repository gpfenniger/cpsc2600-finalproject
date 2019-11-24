/**
 * Article Router
 * Supports GET, POST, PUT, DELETE, OPTIONS
 * @module api/routes/article
 */

const {
    getArticles,
    postArticle,
    deleteArticle
} = require('../controllers/article');

module.exports = require('express')
    .Router()
    .get(['/article', '/article/:slug'], (req, res) => {
        getArticles(req, res);
    })
    .post('/article', (req, res) => {
        postArticle(req, res);
    })
    .delete('/article', (req, res) => {
        deleteArticle(req, res);
    })
    .options('/article', (req, res) => {
        res.send(`
        Server: NodeJS v12.13.0 (Linux) OpenSSL/1.0.0g
        Allow: GET, POST, DELETE, OPTIONS
        Content Type: application/json
    `);
    });
