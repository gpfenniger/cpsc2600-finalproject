/**
 * Article Controller Module
 * @module api/controllers/article
 */

const showdown = require('showdown');
const Article = require('../../database/models/article');
const Category = require('../../database/models/category');
let converter = new showdown.Converter();
/**
 * Gets an Article and its related Categories
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
exports.getArticle = (req, res, next) => {
    Article.findOne({ slug: req.params.slug })
        .then(doc => {
            Category.find({})
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

exports.getArticles = (res, next) => {
    Article.find({}).then(articles => {
        res.status(200)
            .send(articles)
            .catch(err => next(err));
    });
};

let updateCategories = (id, categories) => {
    return new Promise((resolve, reject) => {
        categories.forEach(c => {
            Category.find({ name: c }).then(category => {
                let doc;
                if (category.length == 0) {
                    doc = Category({
                        name: c,
                        articles: [id]
                    });
                } else {
                    doc = category[0];
                    doc.articles.push(id);
                }
                doc.save()
                    .then(() => resolve())
                    .catch(err => reject(err));
            });
        });
    });
};

exports.updateArticle = req => {
    return new Promise((resolve, reject) => {
        Article.updateOne(
            {
                slug: req.body.slug
            },
            {
                name: req.body.name,
                content: converter.makeHtml(req.body.content),
                slug: req.body.name.toLowerCase().replace(' ', '_'),
                date: new Date()
            }
        )
            .then(article => {
                updateCategories(article._id, req.body.categories)
                    .then(() => resolve())
                    .catch(err => reject(err));
            })
            .catch(err => reject(err));
    });
};

/**
 * Create an article in the database and its categories
 * @param {Object} req
 */
exports.saveArticle = req => {
    return new Promise((resolve, reject) => {
        Article({
            name: req.body.name,
            content: converter.makeHTML(req.body.content),
            slug: req.body.name.toLowerCase().replace(' ', '_'),
            date: new Date()
        })
            .save()
            .then(article => {
                if (req.body.categories) {
                    updateCategories(article._id, req.body.categories)
                        .then(() => resolve())
                        .catch(err => reject(err));
                }
            })
            .catch(err => reject(err));
    });
};

exports.removeArticle = slug => {
    return new Promise((resolve, reject) => {
        Article.deleteOne({ slug: slug })
            .then(() => resolve())
            .catch(err => reject(err));
    });
};
