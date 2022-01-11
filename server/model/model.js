const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    age: String,
    latitude: String,
    longitude: String,
    time: String,
    date: String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;