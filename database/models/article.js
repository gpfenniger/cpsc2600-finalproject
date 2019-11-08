import mongoose from 'mongoose';

let ArticleSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 30,
        required: true
    },
    blobs: [
        {
            title: String,
            text: String
        }
    ],
    tags: [
        {
            type: String,
            maxlength: 30
        }
    ]
});

exports.Article = mongoose.model('Article', ArticleSchema);
