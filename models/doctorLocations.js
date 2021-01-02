const mongoose = require('mongoose');

const instituteLocationSchema = new mongoose.Schema({
    instituteId: {
        type: String,
        required: true
    },
    locationId: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('instituteLocation', instituteLocationSchema);