const mongoose = require('mongoose');

const theatersSchema = new mongoose.Schema({
    theaterName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    cpass: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    theaterEmail: {
        type: String,
        required: true,
        trim: true,

    },
    theaterMobile: {
        type: String
    },
    theaterAdd: {
        type: String
    },
    noOfScreen: {
        type: Number
    }
});


const Theater = mongoose.model('Theater', theaterSchema);

module.exports = Theater;