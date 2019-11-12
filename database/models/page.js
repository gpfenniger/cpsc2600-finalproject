const mongoose = require('mongoose');

exports.Page = mongoose.model(
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
        content: [
            {
                title: String,
                content: String
            }
        ]
    })
);
