const mongoose = require('mongoose');
const castSchema = new mongoose.Schema({

    castName :{
        type: String,
        trim: true
    }, 
    castImage :{
        data: Buffer,
        contentType: String
    }, 
    castDescrption :{
        type: String,
        trim: true
    } 
});

const Cast = mongoose.model('Cast', castSchema);

module.exports = Cast;