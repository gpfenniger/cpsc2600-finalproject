const mongoose = require('mongoose')

exports.Category = mongoose.model(
    'Category',
    new mongoose.Schema({
        name: {
            type: String,
            maxlength: 30,
            required: true
        },
        articles: [ mongoose.Types.ObjectId ]
    })
)