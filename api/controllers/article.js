/**
 * Article Controller Module
 * @module api/controllers/article
 */

const Article = require('../../database/models/article');
const Category = require('../../database/models/category');
const { find, findOne, update } = require('./common');

/**
 * Gets an Article and its related Categories
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
exports.getArticle = (req, res, next) => {
    findOne(Article, { slug: req.params.slug })
        .then(doc => {
            find(Category, {})
                .then(categories => {
                    res.status(200).send({
                        name: doc.name,
                        slug: doc.slug,
                        content: doc.content,
                        sections: [
                            {
                                name: 'Categories',
                                links: categories.filter(
                                    category =>
                                        category.articles.indexOf(doc._id) != -1
                                )
                            }
                        ]
                    });
                })
                .catch(err => {
                    res.status(500);
                    next(err);
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
    let modifier = {};
    if (req.body.name) {
        modifier.name = req.body.name;
        modifier.slug = req.body.name.toLowerCase().replace(' ', '_');
    }
    if (req.body.content)
        modifier.content = req.body.content
            .replace(new RegExp('&lt;', 'g'), '<')
            .replace(new RegExp('&gt;', 'g'), '>')
            .replace(new RegExp('&#x2F;', 'g'), '/');
    if (req.body.slug) {
        update(Article, { slug: req.body.slug }, modifier, res, next);
    } else {
        res.status(400);
        next(new Error('Bad Request - No Slug'));
    }
};
