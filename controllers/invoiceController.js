const Invoice = require('../models/invoiceModel');
const Supplier = require('../models/supplierModel');
const Customer = require('../models/customerModel');
const Project = require('../models/projectModel');
const mongoose = require('mongoose');
const INVOICE_VAT = 21;
const Schema = mongoose.Schema;
exports.create = (request, response) => {
    let invoice = new Invoice({
        invoiceSer: request.body.invoiceSer,
        invoiceNumber: request.body.invoiceNumber,
        invoiceDate: request.body.invoiceDate,
        // invoiceSupplier: {
        //     supplierName: request.body.invoiceSupplier.supplierName,
        //     supplierAddress: {
        //         Street: request.body.Street,
        //         City: request.body.City,
        //         Code: request.body.Code
        //     },
        //     supplierCode: request.body.invoiceSupplier.supplierCode,
        //     supplierVATCode: request.body.invoiceSupplier.supplierVATCode,
        //     supplierIsActive: request.body.invoiceSupplier.supplierIsActive
        // },
        // invoiceCustomer: {
        //     customerName: request.body.invoiceCustomer.customerName,
        //     customerAddress: {
        //         Street: request.body.Street,
        //         City: request.body.City,
        //         Code: request.body.Code
        //     },
        //     customerCode: request.body.invoiceCustomer.customerCode,
        //     customerVATCode: request.body.invoiceCustomer.customerVATCode,
        //     customerIsActive: request.body.invoiceCustomer.customerIsActive
        // },
        // invoiceProject: {
        //     projectName: request.body.projectName,
        //     projectPrice: request.body.projectPrice,
        //     projectIsActive: request.body.projectIsActive
        // },
        invoiceProjectQuant: request.body.invoiceProjectQuant,
        invoicePrice: request.body.invoicePrice,
        invoiceVAT: request.body.invoiceVAT,
        invoiceRate: request.body.invoiceRate,
        invoiceIsActive: request.body.invoiceIsActive
    });
    invoice.invoiceSupplier = new Supplier({
        //   _id: mongoose.Types.ObjectId(),
        supplierName: request.body.invoiceSupplier.supplierName,
        supplierAddress: {
            Street: request.body.invoiceSupplier.supplierAddress.Street,
            City: request.body.invoiceSupplier.supplierAddress.City,
            Code: request.body.invoiceSupplier.supplierAddress.Code
        },
        supplierCode: request.body.invoiceSupplier.supplierCode,
        supplierVATCode: request.body.invoiceSupplier.supplierVATCode,
        supplierIsActive: request.body.invoiceSupplier.supplierIsActive
    });
    invoice.invoiceCustomer = new Customer({
        //  _id: mongoose.Types.ObjectId(),
        customerName: request.body.invoiceCustomer.customerName,
        customerAddress: {
            Street: request.body.invoiceCustomer.customerAddress.Street,
            City: request.body.invoiceCustomer.customerAddress.City,
            Code: request.body.invoiceCustomer.customerAddress.Code
        },
        customerCode: request.body.invoiceCustomer.customerCode,
        customerVATCode: request.body.invoiceCustomer.customerVATCode,
        customerIsActive: request.body.invoiceCustomer.customerIsActive

    });
    invoice.invoiceProject = new Project({
        //   _id: mongoose.Types.ObjectId(),
        projectName: request.body.invoiceProject.projectName,
        projectPrice: request.body.invoiceProject.projectPrice,
        projectIsActive: request.body.invoiceProject.projectIsActive
    });

    console.log('Return : ' + JSON.stringify(invoice))
    invoice.save((err) => {
        if (err) throw err;
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