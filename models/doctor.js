const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    nameEn: {
        type: String,
        required: true,
        min: 3
    },
    nameMl: {
        type: String,
        required: true,
        min: 3
    },
    degree: {
        type: Array,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    experience: {
        type: Date,
        required: false
    },
    photoUrl: {
        type: String,
        required: false
    },
    regNo: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('doctor', doctorSchema);