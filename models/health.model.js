const mongoose = require('mongoose');

const healthSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true,
        trim: true
    },
    temperature: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phonenumber: {
        type: String,
        required: true,
        trim: true
    },
    
}, {
    timestamps: true
});

const Health = mongoose.model('health', healthSchema);

module.exports = Health;