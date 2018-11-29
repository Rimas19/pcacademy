const mongoose = require('mongoose');
const address = require('../entities/address')
const Schema = mongoose.Schema;


let CustomerSchema = new Schema({
    customerName: { type: String, required: true, max: 50, unique: true },
    customerAddress: address,
    customerCode: { type: Number },
    customerVATCode: { type: String }
});

module.exports = mongoose.model('Customer', CustomerSchema);