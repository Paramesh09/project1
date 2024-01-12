const mongoose = require('mongoose');

const addSchema = new mongoose.Schema({
    studid: String,
    address: String,
    phone: Number
})
const newAddress = mongoose.model('addressList', addSchema)

module.exports = newAddress;