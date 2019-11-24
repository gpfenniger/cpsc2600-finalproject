/**
 * Category Router
 * Supports GET, POST, PUT, DELETE
 * @module api/routes/category
 */

const Category = require('../../database/models/category');
const { get, getOne, save, remove } = require('../controllers/common');
const { updateCategory } = require('../controllers/category');

module.exports = require('express')
    .Router()
    .get(['/category', '/category/:name'], (req, res, next) => {
        req.params.name
            ? getOne(Category, { name: req.params.name }, res, next)
            : get(Category, {}, res, next);
    })
    .post('/category', (req, res, next) => {
        save(
            Category({
                name: req.params.name,
                articles: req.params.articles
            }),
            res,
            next
        );
    })
    .put('/category', (req, res, next) => {
        updateCategory(req, res, next);
    })
    .delete('/category', (req, res, next) => {
        remove(Category, { name: req.body.name }, res, next);
    });
