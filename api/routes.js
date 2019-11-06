const express = require('express');
const router = express.Router();

const { Faction } = require('../database/models/faction');

let getDocuments = (res, model, params) => {
    model.find(params, (err, docs) => {
        if (err) {
            console.log(error);
            res.status(500).send("Oh no! We've come across a server error");
        } else res.status(200).send(docs);
    });
};

// TODO 3 GET endpoints for API

router.get(['/faction', '/faction/:stub'], (req, res) => {
    let params = {};
    if (req.params.stub) params.stub = req.params.stub;
    getDocuments(res, Faction, params);
});

router.get(['/article', '/article/:id'], (req, res) => {});
router.get('/map', (req, res) => {});

// TODO 2 POST endpoints for API

router.post('/user', (req, res) => {});
router.post('/article', (req, res) => {});

module.exports = router;
