const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let InvoiceSchema = new Schema({
    invoiceSer: { type: String, required: true, max: 10 },
    invoiceNumber: { type: Number, required: true, max: 10, unique: true },
    invoiceDate: { type: Date, required: true },
    invoiceSupplier: { type: mongoose.Schema.Types.ObjectId, ref: 'suppliers' },
    invoiceCustomer: { type: mongoose.Schema.Types.ObjectId, ref: 'customers' },
    invoiceProject: { type: mongoose.Schema.Types.ObjectId, ref: 'projects' },
    invoiceProjectQuant: { type: Number, required: true },
    invoicePrice: { type: Number, required: true },
    invoiceVAT: { type: String, required: true },
    invoiceRate: { type: Number, required: true },
    invoiceIsActive: { type: Boolean, required: true }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);