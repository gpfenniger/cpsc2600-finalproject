const mongoose = require('mongoose');
/* should be changed to not store plaintext passwords */

module.exports = mongoose.model(
    'User',
    new mongoose.Schema({
        username: {
            type: String,
            maxlength: 20,
            required: true,
            unique: true
        },
        password: {
            type: String,
            maxlength: 20,
            required: true
        }
    })
);
