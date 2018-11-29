const Invoice = require('../models/invoiceModel');
const Supplier = require('../models/supplierModel');
const supplier = new Supplier();

exports.create = (request, response) => {
    let invoice = new Invoice({
        invoiceSer: request.body.invoiceSer,
        invoiceNumber: request.body.invoiceNumber,
        invoiceDate: request.body.invoiceDate,
        invoiceSupplier: {
            supplierName: request.body.supplierName,
            supplierAddress: {
                Street: request.body.Street,
                City: request.body.City,
                Code: request.body.Code
            },
            supplierCode: request.body.supplierCode,
            supplierVATCode: request.body.supplierVATCode,
            supplierIsActive: request.body.supplierIsActive
        },
        invoiceCustomer: {
            customerName: request.body.customerName,
            customerAddress: {
                Street: request.body.Street,
                City: request.body.City,
                Code: request.body.Code
            },
            customerCode: request.body.customerCode,
            customerVATCode: request.body.customerVATCode,
            customerIsActive: request.body.customerIsActive
        },
        invoiceProject: {
            projectName: request.body.projectName,
            projectPrice: request.body.projectPrice,
            projectIsActive: request.body.projectIsActive
        },
        invoiceProjectQuant: request.body.invoiceProjectQuant,
        invoicePrice: request.body.invoicePrice,
        invoiceVAT: request.body.invoiceVAT,
        invoiceRate: request.body.invoiceRate,
        invoiceIsActive: request.body.invoiceIsActive
    });
    console.log(invoice)
    console.log('Return : ' + JSON.stringify(request.body.supplierName))
    invoice.save(() => {
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