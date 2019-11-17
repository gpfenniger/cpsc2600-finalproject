/*
    Blog Router should support full set of RESTful operations
    HTTP Requests:
        GET, POST, DELETE
        OPTIONS
*/

const { getArticles, postArticle, deleteArticle } = require("../controllers/article");
const { articleParams } = require('../controllers/validation');

module.exports = require('express')
    .Router()
    .get(['/article', '/article/:slug'], (req, res) => {
        getArticles(req, res);
    })
    .post('/article', articleParams, (req, res) => {
        postArticle(req, res);
    })
    .delete('/article/:slug', (req, res) => {
        deleteArticle(req, res);
    })
    .options('/article', (req, res) => {
        res.send(`
        Server: NodeJS v12.13.0 (Linux) OpenSSL/1.0.0g
        Allow: GET, POST, DELETE, OPTIONS
        Content Type: application/json
    `);
    });
