const express = require('express');
const { body } = require('express-validator');

let sanitizeArticle = [
    body('name').escape(),
    body('content')
        .trim()
        .escape()
];

let sanitizeCategory = [body('name').escape(), body('articles').toArray()];

let sanitizePage = [
    body('name').escape(),
    body('content')
        .trim()
        .escape()
];

let sanitizeParams = [body('name').escape(), body('slug').escape()];

module.exports = express
    .Router()
    .post('/article', sanitizeArticle, (req, res, next) => next())
    .post('/category', sanitizeCategory, (req, res, next) => next())
    .post('/page', sanitizePage, (req, res, next) => next())
    .put('/article', sanitizeArticle, (req, res, next) => next())
    .put('/category', sanitizeCategory, (req, res, next) => next())
    .put('/page', sanitizePage, (req, res, next) => next())
    .delete(
        ['/article', '/category', '/page'],
        sanitizeParams,
        (req, res, next) => next()
    );
