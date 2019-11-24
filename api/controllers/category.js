/**
 * Category Controller Module
 * @module api/controllers/category
 */

const Category = require('../../database/models/category');
const { findOne, update } = require('./common');

/**
 * Updates a category
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
exports.updateCategory = (req, res, next) => {
    if (req.body.name && req.body.newName) {
        update(
            Category,
            { name: req.body.name },
            { name: req.body.newName },
            res
        );
    } else if (req.body.name && req.body.ids) {
        findOne(Category, { name: req.body.name })
            .then(doc => {
                req.body.ids.forEach(id => doc.articles.push(id));
                update(Category, { articles: doc.articles }, doc, res);
            })
            .catch(err => {
                res.status(400);
                next(err);
            });
    } else res.status(400);
};
