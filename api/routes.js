const router = require('express').Router();
const blogRouter = require('./blog');
const generalRouter = require('./general');
const userRouter = require('./user');

router.use('/api', [blogRouter, generalRouter]);
router.use('/', userRouter);

module.exports = router;
