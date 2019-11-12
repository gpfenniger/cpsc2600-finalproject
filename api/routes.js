const router = require('express').Router();
const { blogRouter } = require('./blog');
const { pageRouter } = require('./page');
const { userRouter } = require('./user');

router.use('/api', [blogRouter, pageRouter]);
router.use('/', userRouter);

module.exports = router;
