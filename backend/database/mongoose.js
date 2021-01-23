const mongoose = require("mongoose");
mongoose.Promise = global.Promise; //to make asynchronous process

mongoose.connect("mongodb://127.0.0.1:27017/MovieMood", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => { console.log("connected to db at mongodb://127.0.0.1:27017/MovieMood") })
    .catch((err) => { console.log("Err Occored" + err) });

module.exports = mongoose;