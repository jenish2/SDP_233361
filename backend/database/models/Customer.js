const mongoose = require('mongoose');


const { Schema } = mongoose;
const customerSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    gender: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        required:true,
        trim: true
    },
    wallet: {
        type: Number,
        trim: true
    }
});


const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;