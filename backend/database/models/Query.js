const mongoose = require('mongoose');

const queriesSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('email is invalid please enter in correct formate');
            }
        }
    },
    mobile: {
        type: String,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error('Phone is invalid please enter in correct formate');
            }
        }
    },
    query: {
        type: String,
        trim: true,
        required: true
    }

});

const Queris = mongoose.model("Queris", queriesSchema);
module.exports = Queris;