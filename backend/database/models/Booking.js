const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookingSchema = new mongoose.Schema({
    showId: {
        type: Schema.Types.ObjectId,
        ref: "show_Timing"
    },
    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    },
    theaterId: {
        type: Schema.Types.ObjectId,
        ref: 'Theater'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    },
    date: {
        type: Date
    },
    startTime: {
        type: String
    },
    seat: {
        type: [Number]
    },
    pricePerSeat: {
        type: Number
    },
    totalNoOfSeat: {
        type: Number
    },
    total: {
        type: Number
    },
    movieName: {
        type: String
    },
    theaterName: {
        type: String
    },
    username: {
        type: String
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
