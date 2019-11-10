const router = require('express').Router();
const blogRouter = require('./blog');
const generalRouter = require('./general');

router.use('/api', [blogRouter, generalRouter]);

module.exports = router;
