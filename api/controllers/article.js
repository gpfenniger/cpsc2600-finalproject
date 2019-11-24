/**
 * Article Controller Module
 * @module api/controllers/article
 */

const Article = require('../../database/models/article');
const Category = require('../../database/models/category');
const { find, findOne } = require('./common');

/**
 * Gets an Article and its related Categories
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
exports.getArticle = (req, res, next) => {
    findOne(Article, { slug: req.params.slug })
        .then(doc => {
            find(Category, {
                _id: {
                    $in: article._id
                }
            }).then(categories => {
                doc['categories'] = categories;
                res.status(200).send(doc);
            });
        })
        .catch(err => {
            res.status(400);
            next(err);
        });
};

/**
 * Update an Article in the database
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
exports.updateArticle = (req, res, next) => {
    next(new Error('TODO'));
};
