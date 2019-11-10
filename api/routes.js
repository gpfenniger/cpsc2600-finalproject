const router = require('express').Router();
const blogRouter = require('./blog');

router.use('/api', blogRouter);

module.exports = router;
