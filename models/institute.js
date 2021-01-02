const mongoose = require('mongoose');

const instituteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    locationId: {
        type: String
    }
});

module.exports = mongoose.model('institute', instituteSchema);