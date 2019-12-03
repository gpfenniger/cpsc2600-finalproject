const mongoose = require('mongoose');

module.exports = mongoose.model(
    'Article',
    new mongoose.Schema({
        name: {
            type: String,
            maxlength: 30,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            maxlength: 30,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    })
);
