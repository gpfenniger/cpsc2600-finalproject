const mongoose = require('mongoose');

module.exports = mongoose.model(
    'Category',
    new mongoose.Schema({
        name: {
            type: String,
            maxlength: 30,
            required: true
        },
        articles: [mongoose.Types.ObjectId]
    })
);
