const Invoice = require('../models/invoiceModel');
const Supplier = require('../models/supplierModel');
const Customer = require('../models/customerModel');
const Project = require('../models/projectModel');
const dateFormat = require('dateformat');
const INVOICE_VAT = 21;
const DATE =dateFormat(new Date(), "yyyy-mm-dd");
const Sup = require('../controllers/supplierController')

exports.create = async (request, response) => {
    let supplier = await Supplier.findById('5c03ae30d0672e27604aae23');
    let customer = await Customer.findById('5c03aed3d0672e27604aae26');
    let project = await Project.findById('5c03ad90d0672e27604aae22');
    let invoice = new Invoice({
        invoiceSer: request.body.invoiceSer,
        invoiceNumber: request.body.invoiceNumber,
        invoiceDate:  DATE,
        invoiceProjectQuant: request.body.invoiceProjectQuant,
        invoiceSupplier: supplier,
        invoiceCustomer: customer,
        invoiceProject: project,
        invoicePrice: project.projectPrice * request.body.invoiceProjectQuant,
        invoiceVAT: ((project.projectPrice * request.body.invoiceProjectQuant) / 100 * INVOICE_VAT),
        invoiceRate: (project.projectPrice * request.body.invoiceProjectQuant) + ((project.projectPrice * request.body.invoiceProjectQuant) / 100 * INVOICE_VAT),
        invoiceIsActive: request.body.invoiceIsActive
    });

    console.log('Return : ' + JSON.stringify(invoice))
    console.log('Date : ' + JSON.stringify(DATE))
    invoice.save((err ) => {
        if (err) {
            return response.send();
        }
      
        response.send('Record successfully created.');
    });
}

exports.get = (request, response) => {
    Invoice.find((error, invoices) => {
        response.send(invoices);
    })
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