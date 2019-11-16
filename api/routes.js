/*
    External Router
    This file brings all of the middleware and
    routers together to pass back to the entry
    file.

    Routers:
        blogRouter -> handles requests for /api/article
        pageRouter -> handles requests for /api/page
        userRouter -> handles requests for /usr/login:admin:logout
    Middleware Chain:
        /api/page /api/article POST privelege check
*/

const blogRouter = require('./blog');
const pageRouter = require('./page');
const userRouter = require('./user');
const { getKeys } = require('./user');

module.exports = require('express')
    .Router()
    .use(['/api/page', '/api/article'], (req, res, next) => {
        /* this middleware checks if user is logged in */
        if (req.method === 'POST') {
            if (getKeys().filter(key => key.key == req.body.key).length > 0) {
                next();
            }
        }
    })
    .use('/api', [blogRouter, pageRouter])
    .use('/', userRouter);
