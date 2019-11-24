const Category = require('../../database/models/category');
const { find, findOne, save, update } = require('../controllers/common');

exports.getCategories = (req, res) => {
    (req.params.name
        ? findOne(Category, { name: req.params.name })
        : find(Category, {})
    )
        .then(docs => res.status(200).send(docs))
        .catch(err => {
            console.log(err);
            res.status(404);
        });
};

exports.postCategory = (req, res) => {
    save(
        Category({
            name: req.body.name,
            articles: []
        }),
        res
    );
};

exports.updateCategory = (req, res) => {
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
                console.log(err);
                res.status(400);
            });
    } else res.status(400);
};
