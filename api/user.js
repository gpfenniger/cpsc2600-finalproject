/*
    USER Router should support full set of RESTful operations
    HTTP Requests:
        GET, POST, DELETE
        OPTIONS
    LOGIN SYSTEM
        When a user enters their login system it checks against
        the database and if succesful adds a unique key string
        to a list of keys. The user gets a copy of the key which
        expires within two hours. When the user wants to perform
        a administrative action it will check their key against
        the server list.
*/

const crypto = require('crypto');
const { check, validationResult } = require('express-validator');
const { User } = require('../database/models/user');

Date.prototype.addHours = h => {
    this.setHours(this.getHours() + h);
    return this;
};

let clearExpired = () => {
    let current = new Date();
    loginkeys = loginkeys.filter(loginkey => loginkey.expires > current);
};

let loginkeys = [];
exports.getKeys = () => loginkeys;
exports.userRouter = require('express')
    .Router()
    .post(
        '/login',
        [
            check('username')
                .isLength({ min: 1, max: 16 })
                .escape(),
            check('password')
                .isLength({ min: 1, max: 16 })
                .escape()
        ],
        (req, res) => {
            clearExpired();
            let err = validationResult(req);
            if (!err.isEmpty()) {
                console.log(err);
                res.status(500).send('error');
            } else {
                User.findOne({}, (err, doc) => {
                    if (doc.password == req.body.password) {
                        loginkeys.push({
                            key: crypto.randomBytes(20).toString('hex'),
                            expires: new Date().addHours(2)
                        });
                        res.send({ key: loginkeys[loginkeys.length - 1].key });
                    } else {
                        res.send({ key: undefined });
                    }
                });
            }
        }
    )
    .post('/user', [check('loginkey').escape()], (req, res) => {
        clearExpired();
        let err = validationResult(req);
        if (!err.isEmpty()) {
            console.log(err);
            res.status(500).send('error');
        } else if (!loginkeys.isEmpty()) {
            console.log(req.body.loginkey);
            if (
                loginkeys.filter(loginkey => loginkey.key == req.body.loginkey)
                    .length > 0
            )
                res.send(true);
            else res.send(false);
        } else res.send(false);
    })
    .delete('/user', (req, res) => {
        console.log('logged out');
        loginkeys.filter(loginkey => loginkey.key != req.body.loginkey);
        clearExpired();
    });
