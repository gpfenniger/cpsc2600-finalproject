const fs = require('fs');

module.exports = require('express')
    .Router()
    .use((error, req, res, next) => {
        if (error) {
            fs.appendFile(
                '../../logs/error_log.txt',
                `ERROR : ${error.name} :` + new Date(),
                () => console.log('Failed to Append to Error Log')
            );
            res.send('Oh no! Something went wrong!');
        } else next();
    });
