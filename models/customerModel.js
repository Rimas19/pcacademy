const mongoose = require('mongoose');
const address = require('../entities/address')
const Schema = mongoose.Schema;


let CustomerSchema = new Schema({
    customerName: { type: String, required: true, max: 50, unique: true },
    customerAddress: address,
    customerCode: { type: Number },
    customerVATCode: { type: String },
    customerIsActive: { type: Boolean, required: true }
});

module.exports = mongoose.model('Customer', CustomerSchema);