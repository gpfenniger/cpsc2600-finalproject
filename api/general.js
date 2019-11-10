const generalRouter = require('express').Router();

generalRouter.get('/aboutme', (req, res) => {
    res.send('todo');
});

generalRouter.options('/article', (req, res) => {
    res.send(`
        Server: NodeJS v12.13.0 (Linux) OpenSSL/1.0.0g
        Allow: GET, OPTIONS
        Content Type: application/json
    `);
});

module.exports = generalRouter;
