const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let InvoiceSchema = new Schema({
    invoiceSer: { type: String, required: true },
    invoiceNumber: { type: Number, required: true, unique: true },
    invoiceDate: { type: Date, default: Date.now },
    invoiceSupplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
    invoiceCustomer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    invoiceProject: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    invoiceProjectQuant: { type: Number, required: true },
    invoicePrice: { type: Number, required: true },
    invoiceVAT: { type: Number, required: true },
    invoiceRate: { type: Number, required: true },
    invoiceIsActive: { type: Boolean, required: true }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);