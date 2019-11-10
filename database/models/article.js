const mongoose = require('mongoose');

let ArticleSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 30,
        required: true
    },
    content: [
        {
            title: String,
            content: String
        }
    ],
    slug: {
        type: String,
        maxlength: 30,
        required: true
    },
    tags: [
        {
            type: String,
            maxlength: 30
        }
    ]
});

exports.Article = mongoose.model('Article', ArticleSchema);
