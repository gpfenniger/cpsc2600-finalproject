const userRouter = require('express').Router();
const crypto = require('crypto');
const { check, validationResult } = require('express-validator');
const { User } = require('../database/models/user');

var loginkey = undefined;

userRouter.post(
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
        let err = validationResult(req);
        if (!err.isEmpty()) {
            console.log(err);
            res.status(500).send('error');
        } else {
            User.findOne({}, (err, doc) => {
                if (doc.password == req.body.password) {
                    loginkey = crypto.randomBytes(20).toString('hex');
                    res.send({ key: loginkey });
                } else {
                    res.send({ key: undefined });
                }
            });
        }
    }
);

userRouter.post('/admin', [check('loginkey').escape()], (req, res) => {
    console.log('check');
    let err = validationResult(req);
    if (!err.isEmpty()) {
        console.log(err);
        res.status(500).send('error');
    } else if (loginkey != undefined) {
        console.log(req.body.loginkey);
        res.send(req.body.loginkey == loginkey ? 'yes' : 'no');
    } else res.send('not logged in');
});

module.exports = userRouter;
