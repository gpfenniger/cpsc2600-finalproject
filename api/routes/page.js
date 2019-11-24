/**
 * Page Router
 * @module api/routes/page
 */

const Page = require('../../database/models/page');
const {
    find,
    findOne,
    save,
    remove,
    update
} = require('../controllers/common');

module.exports = require('express')
    .Router()
    .get(['/page', '/page/:slug'], (req, res) => {
        console.log(req.params.slug);

        let promise = req.params.slug
            ? findOne(Page, { slug: req.params.slug })
            : find(Page, {});

        promise
            .then(docs => res.status(200).send(docs))
            .catch(err => console.log(err));
    })
    .post('/page', (req, res) => {
        save(
            Page({
                name: req.body.name,
                content: req.body.content,
                slug: req.body.name.toLowerCase().replace(' ', '_')
            }),
            res
        );
    })
    .put('/page', (req, res) => {
        let modifier = {};
        if (req.body.name) {
            modifier.name = req.body.name;
            modifier.slug = req.body.name.toLowerCase().replace(' ', '_');
        }
        if (req.body.content) modifier.content = req.body.content;

        if (req.body.slug) update(Page, { slug: req.body.slug }, modifier, res);
        else res.status(400);
    })
    .delete('/page', (req, res) => {
        remove(Page, { slug: req.body.slug }, res);
    });
