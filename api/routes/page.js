/**
 * Page Router
 * @module api/routes/page
 */

const showdown = require('showdown');
const Page = require('../../database/models/page');
const { save, remove } = require('../controllers/common');
const { updatePage, getPage } = require('../controllers/page');
const { get } = require('../controllers/common');
let converter = new showdown.Converter();

module.exports = require('express')
    .Router()
    .get(['/page', '/page/:slug'], (req, res, next) => {
        req.params.slug
            ? getPage(Page, { slug: req.params.slug }, res, next)
            : get(Page, {}, res, next);
    })
    .post('/page', (req, res, next) => {
        save(
            Page({
                name: req.body.name,
                content: converter.makeHtml(req.body.content),
                slug: req.body.name.toLowerCase().replace(' ', '_')
            }),
            res,
            next
        );
    })
    .put('/page', (req, res, next) => {
        updatePage(req, res, next);
    })
    .delete('/page', (req, res, next) => {
        remove(Page, { slug: req.body.slug }, res, next);
    });
