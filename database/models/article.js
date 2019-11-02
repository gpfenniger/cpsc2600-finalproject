import mongoose from "mongoose";

let ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 30,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    tags: [
        {
            type: String,
            maxlength: 30
        }
    ]
});

exports.Article = mongoose.model("Article", ArticleSchema);
