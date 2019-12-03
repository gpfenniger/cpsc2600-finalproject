/**
 * Page Controller Module
 * @module api/controllers/page
 */

const { update, findOne } = require('./common');
const Page = require('../../database/models/page');

/**
 * Updates a Page document
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
exports.updatePage = (req, res, next) => {
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

    if (req.body.slug)
        update(Page, { slug: req.body.slug }, modifier, res, next);
    else {
        res.status(400);
        next(new Error('Bad Request - No Slug'));
    }
};

exports.getPage = (model, params, res, next) => {
    findOne(model, params)
        .then(page => {
            res.status(200).send({
                name: page.name,
                content: page.content,
                slug: page.slug,
                sections: [
                    {
                        name: 'No Links',
                        links: []
                    }
                ]
            });
        })
        .catch(err => next(err));
};
