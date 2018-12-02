const mongoose = require('mongoose');
const address = require('../entities/address')
const Schema = mongoose.Schema;


let SupplierSchema = new Schema({
    supplierName: { type: String, required: true, max: 50, unique: true },
    supplierAddress: address,
    supplierCode: { type: Number },
    supplierVATCode: { type: String },
    supplierIsActive: { type: Boolean, required: true }
});


module.exports = mongoose.model('Supplier', SupplierSchema, 'suppliers');