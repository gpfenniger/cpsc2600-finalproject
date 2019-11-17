const { checkValidationErrors } = require('./validation');
const Article = require('../../database/models/article');

exports.getArticles = (req, res) => {
    let params = {};
    if (req.params.slug) params.slug = req.params.slug;
    Article.find(params, (err, docs) => {
        if (err) {
            console.log(err);
            res.status(404).send('error');
        } else {
            res.status(200).send(docs);
        }
    });
}

exports.postArticle = (req, res) => {
    if (checkValidationErrors(req)) {
        res.status(500).send('improper input');
    } else {
        Article({
            name: req.body.name,
            content: req.body.content,
            slug: req.body.name.toLowerCase().replace(' ', '_'),
            tags: req.body.tags
        }).save(err => {
            if (err) console.log(err);
        });
    }
}

//TODO delete article
exports.deleteArticle = (req, res) => {
    console.log("TODO");
}