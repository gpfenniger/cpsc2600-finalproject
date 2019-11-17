const mongoose = require('mongoose');

module.exports = mongoose.model(
    'Page',
    new mongoose.Schema({
        name: {
            type: String,
            maxlength: 30,
            required: true
        },
        slug: {
            type: String,
            maxlength: 30,
            required: true,
            unique: true
        },
        content: {
            type: String,
            required: true
        }
    })
);
