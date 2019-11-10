const mongoose = require('mongoose');
/* should be changed to not store plaintext passwords */

let UserSchema = new mongoose.Schema({
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
});

exports.User = mongoose.model('User', UserSchema);
