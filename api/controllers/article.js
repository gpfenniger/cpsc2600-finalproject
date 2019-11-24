const Article = require('../../database/models/article');
const { find, findOne, save, update } = require('../controllers/common');

exports.getArticles = (req, res) => {
    (req.params.name
        ? findOne(Article, { name: req.params.name })
        : find(Article, {})
    )
        .then(docs => res.status(200).send(docs))
        .catch(err => {
            console.log(err);
            res.status(404);
        });
};

exports.postArticle = (req, res) => {
    save(
        Article({
            name: req.body.name,
            content: req.body.content,
            slug: req.body.name.toLowerCase().replace(' ', '_'),
            tags: req.body.tags
        }),
        res
    );
};

exports.updateArticle = (req, res) => {};
