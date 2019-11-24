/**
 * Route and Middleware Aggregator
 * @module api/routes
 * Middleware Chain
 *      Privleges - DELETE, POST, PUT
 *      Validation
 *      Sanitization
 *      Errors
 */

const blogRouter = require('./routes/blog');
const pageRouter = require('./routes/page');
const userRouter = require('./routes/user');
const cateogryRouter = require('./routes/category');
const validation = require('./middleware/validation');
const sanitization = require('./middleware/sanitization');
const privleges = require('./middleware/privleges');
const errorMiddleware = require('./middleware/errors');

module.exports = require('express')
    .Router()
    .use('/api', [privleges, validation, sanitization])
    .use('/', [errorMiddleware, userRouter])
    .use('/api', [blogRouter, pageRouter, cateogryRouter]);
