const Invoice = require('../models/invoiceModel');
const Supplier = require('../models/supplierModel');
const Customer = require('../models/customerModel');
const Project = require('../models/projectModel');
const INVOICE_VAT = 21;
const PERCENT = 100;
const dateFormat = require('dateformat');
const DATE = dateFormat(new Date(), "yyyy-mm-dd");

exports.create = async (request, response) => {
    let supplier = await Supplier.findById('5c0520380973c5244c7e4254')
    let customer = await Customer.findById('5c051fe20973c5244c7e4252');
    let project = await Project.findById('5c0520f60973c5244c7e4256');
    let invoice = new Invoice({
        invoiceSer: request.body.invoiceSer,
        invoiceNumber: request.body.invoiceNumber,
        invoiceDate: DATE,
        invoiceProjectQuant: request.body.invoiceProjectQuant,
        invoiceSupplier: supplier,
        invoiceCustomer: customer,
        invoiceProject: project,
        invoicePrice: project.projectPrice * request.body.invoiceProjectQuant,
        invoiceVAT: ((project.projectPrice * request.body.invoiceProjectQuant) / PERCENT * INVOICE_VAT),
        invoiceRate: (project.projectPrice * request.body.invoiceProjectQuant) + ((project.projectPrice * request.body.invoiceProjectQuant) / PERCENT * INVOICE_VAT),
        invoiceIsActive: request.body.invoiceIsActive
    });
    invoice.save((err) => {
        if (err) {
            return response.send();
        }
        response.send('Record successfully created.');
    });
}

exports.get = async function (request, response) {
    let invoice = await Invoice.find().populate('invoiceSupplier').populate('invoiceCustomer').populate('invoiceProject');
    response.send(invoice);
}

exports.read = (request, response) => {
    Invoice.findById(request.query.id, (error, resp) => {
        if (error) {
            return response.send(resp + ' : ' + ' Record nor found.');
        }
        response.send(resp);
    })
}

exports.delete = (request, response) => {
    Invoice.findByIdAndDelete(request.query.id, (error, resp) => {
        if (error) {
            return response.send(error);
        }
        response.send(resp + ' : ' + ' Record successfully deleted.');
    })
}

exports.update = (request, response) => {
    Invoice.findByIdAndUpdate(request.query.id, { $set: request.body }, (error, resp) => {
        if (error) {
            return response.send(' Record not found.');
        }
        response.send(resp + ' : ' + ' Record successfully updated.');
    })
}