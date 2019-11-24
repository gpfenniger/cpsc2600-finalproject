module.exports = require('express')
    .Router()
    .use((error, req, res, next) => {
        // check for errors and report them smartly
        if (!error) next();
    });
