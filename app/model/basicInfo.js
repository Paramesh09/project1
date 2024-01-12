const mongoose = require('mongoose');

const basicSchema = new mongoose.Schema({
    sName: String,
    email: String,
    depart: String,
    batch: Number,
    dob: Date
});

const basicDetails = mongoose.model('basicInfor', basicSchema);
module.exports = basicDetails;