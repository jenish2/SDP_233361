const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    language: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    castDetails: {
        type:[Cast],
        trim:true
    },
    director: {
        type: String,
        trim: true
    },
    duration: {
        type: Number,
        trim: true
    },
    releaseDate: {
        type: Date,
        trim: true
    },
    live: {
        type: Boolean,
        trim: true
    },
    future: {
        type: Boolean,
        trim: true
    },
    poster: {
        data: Buffer,
        contentType: String
    },
    trailerUrl:{
        type:String,
        trim:true
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;