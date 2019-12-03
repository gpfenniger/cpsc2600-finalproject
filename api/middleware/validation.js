const express = require('express');
const { check, validationResult } = require('express-validator');

let lengthReq = { min: 1, max: 30 };

let validArticle = [
    check('name')
        .isString()
        .isLength(lengthReq)
        .withMessage('Name is not proper'),
    check('content')
        .isString()
        .withMessage('Content is not String')
];

let validCategory = [
    check('name')
        .isString()
        .isLength(lengthReq),
    check('articles').isArray()
];

let validPage = [
    check('name')
        .isString()
        .isLength(lengthReq),
    check('content').isString()
];

let validParam = [
    check('name')
        .isString()
        .isLength(lengthReq),
    check('slug')
        .isString()
        .isLength(lengthReq)
        .isLowercase()
];

let validate = (req, res, next, target) => {
    try {
        validationResult(req).throw();
        next();
    } catch (err) {
        res.status(412).json({
            target: target,
            msg: 'Failed to Validate'
        });
    }
};

module.exports = express
    .Router()
    .post('/article', validArticle, (req, res, next) =>
        validate(req, res, next, 'Article')
    )
    .post('/category', validCategory, (req, res, next) =>
        validate(req, res, next, 'Category')
    )
    .post('/page', validPage, (req, res, next) =>
        validate(req, res, next, 'Page')
    )
    .put('/article', validArticle, (req, res, next) =>
        validate(req, res, next, 'Article')
    )
    .put('/category', validCategory, (req, res, next) =>
        validate(req, res, next, 'Category')
    )
    .put('/page', validPage, (req, res, next) =>
        validate(req, res, next, 'Page')
    )
    .delete(['/article', '/category', '/page'], validParam, (req, res, next) =>
        validate(req, res, next, 'Params')
    );
