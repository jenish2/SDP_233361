const mongoose = require('mongoose');
const PaymentSchema = new mongoose.Schema({
    bookingId:{
        type:Schema.Types.ObjectId,
        ref:"Booking",
        trim:true
    },
    userName:{
        type:String,
        trim:true
    },
    creditcard_Details:{
        type:Number,
        trim:true
    },
    totalPrice:{
        type:Number,
        trim:true
    },
    movieName:{
        type:String,
        trim:true
    },
    theaterName:{
        type:String,
        trim:true
    },
    Number_of_Tickets:{
        type:[Seat],
        trim:true
    },
    CancelationfareIsThere:{
        type:Boolean,
        trim:true
    },
    Cancelationfare:{
        type:Number,
        trim:true
    },
    WalletDedcitionamount:{
        type:Number,
        trim:true
    }
});

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;