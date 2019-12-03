/**
 * Route and Middleware Aggregator
 * @module api/routes
 * Middleware Chain
 *      Privleges - DELETE, POST, PUT
 *      Validation
 *      Sanitization
 *      Errors
 */

const articleRouter = require('./routes/article');
const pageRouter = require('./routes/page');
const { userRouter } = require('./routes/user');
const categoryRouter = require('./routes/category');
const validation = require('./middleware/validation');
const sanitization = require('./middleware/sanitization');
const privleges = require('./middleware/privleges');

module.exports = require('express')
    .Router()
    .use('/api', [privleges, validation, sanitization])
    .use('/', userRouter)
    .use('/api', [articleRouter, pageRouter, categoryRouter])
    .options('*', (req, res) => {
        res.status(200).send(`
        Server: NodeJS v12.13.0 (Linux) OpenSSL/1.0.0g
        Allow: GET, POST, PUT, DELETE, OPTIONS
        Content Type: application/json
    `);
    });
