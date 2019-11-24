/**
 * Page Controller Module
 * @module api/controllers/page
 */

const { update } = require('./common');

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
    if (req.body.content) modifier.content = req.body.content;

    if (req.body.slug)
        update(Page, { slug: req.body.slug }, modifier, res, next);
    else {
        res.status(400);
        next(new Error('Bad Request - No Slug'));
    }
};
