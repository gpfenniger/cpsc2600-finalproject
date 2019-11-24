/**
 * Category Router
 * Supports GET, POST, PUT, DELETE
 * @module api/routes/category
 */

const Category = require('../../database/models/category');
const { remove } = require('../controllers/common');
const {
    getCategories,
    postCategory,
    updateCategory
} = require('../controllers/category');

module.exports = require('express')
    .Router()
    .get(['/category', '/category/:name'], (req, res) => {
        getCategories(req, res);
    })
    .post('/category', (req, res) => {
        postCategory(req, res);
    })
    .put('/category', (req, res) => {
        updateCategory(req, res);
    })
    .delete('/category', (req, res) => {
        remove(Category, { name: req.body.name }, res);
    });
