const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3
    },
    address: {
        type: String,
        required: false,
        min: 5
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('user', userSchema);