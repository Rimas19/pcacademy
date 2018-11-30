const Invoice = require('../models/invoiceModel');
const Supplier = require('../models/supplierModel');
const Customer = require('../models/customerModel');
const Project = require('../models/projectModel');
const INVOICE_VAT = 21;
const Sup = require('../controllers/supplierController')

exports.create = async (request, response) => {
    // Project.findById('5bffce348e223a4eacc1d166', (err, project) => {
    //     Supplier.findById('5bffa0092b6cf93abcee1698', (err, supplier) => {
    //         Customer.findById('5bff94f334c7e54ae054544c', (err, customer) => {
    //             console.log('PROJECT', project)
    //             console.log('supplier', supplier)
    //             console.log('customer', customer)
    //             response.send(customer);
    //         })
    //     })
    // });

    let supplier = await Supplier.findById('5bffa0092b6cf93abcee1698');
    let customer = await Customer.findById('5bff94f334c7e54ae054544c');
    let poject = await Project.findById('5bffce348e223a4eacc1d166');


    console.log('poject', poject);
    response.send(poject);
    //let Project = yield Project.findById('5bffce348e223a4eacc1d166');



    let invoice = new Invoice({
        invoiceSer: request.body.invoiceSer,
        invoiceNumber: request.body.invoiceNumber,
        invoiceDate: request.body.invoiceDate,
        invoiceProjectQuant: request.body.invoiceProjectQuant,
        invoiceSupplier: supplier,
        invoiceCustomer: customer,
        invoiceProject: project,
        invoicePrice: project.projectPrice,
        invoiceVAT: (invoicePrice / 100 * INVOICE_VAT),
        invoiceRate: invoicePrice + (invoicePrice / 100 * INVOICE_VAT),
        invoiceIsActive: request.body.invoiceIsActive
    });
    // invoice.invoiceSupplier = new Supplier({
    //     supplierName: request.body.invoiceSupplier.supplierName,
    //     supplierAddress: {
    //         Street: request.body.invoiceSupplier.supplierAddress.Street,
    //         City: request.body.invoiceSupplier.supplierAddress.City,
    //         Code: request.body.invoiceSupplier.supplierAddress.Code
    //     },
    //     supplierCode: request.body.invoiceSupplier.supplierCode,
    //     supplierVATCode: request.body.invoiceSupplier.supplierVATCode,
    //     supplierIsActive: request.body.invoiceSupplier.supplierIsActive
    // });
    // invoice.invoiceCustomer = new Customer({
    //     customerName: request.body.invoiceCustomer.customerName,
    //     customerAddress: {
    //         Street: request.body.invoiceCustomer.customerAddress.Street,
    //         City: request.body.invoiceCustomer.customerAddress.City,
    //         Code: request.body.invoiceCustomer.customerAddress.Code
    //     },
    //     customerCode: request.body.invoiceCustomer.customerCode,
    //     customerVATCode: request.body.invoiceCustomer.customerVATCode,
    //     customerIsActive: request.body.invoiceCustomer.customerIsActive

    // });
    // invoice.invoiceProject = new Project({
    //     projectName: request.body.invoiceProject.projectName,
    //     projectPrice: request.body.invoiceProject.projectPrice,
    //     projectIsActive: request.body.invoiceProject.projectIsActive
    // });

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