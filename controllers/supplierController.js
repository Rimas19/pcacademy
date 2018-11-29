const Supplier = require('../models/supplierModel');

exports.create = (request, response) => {
    let supplier = new Supplier({
        supplierName: request.body.supplierName,
        supplierAddress: {
            Street: request.body.supplierAddress.Street,
            City: request.body.supplierAddress.City,
            Code: request.body.supplierAddress.Code
        },
        supplierCode: request.body.supplierCode,
        supplierVATCode: request.body.supplierVATCode,
        supplierIsActive: request.body.supplierIsActive
    });
    console.log(supplier)
    supplier.save(() => {
        response.send('Record successfully created.');
    });
}

exports.get = (request, response) => {
    Supplier.find((error, suppliers) => {
        response.send(suppliers);
    })
}

exports.read = (request, response) => {
    Supplier.findById(request.query.id, (error, resp) => {
        if (error) {
            return response.send(resp + ' : ' + ' Record nor found.');
        }
        response.send(resp);
    })
}

exports.delete = (request, response) => {
    Supplier.findByIdAndDelete(request.query.id, (error, resp) => {
        if (error) {
            return response.send(error);
        }
        response.send(resp + ' : ' + ' Record successfully deleted.');
    })
}

exports.update = (request, response) => {
    Supplier.findByIdAndUpdate(request.query.id, { $set: request.body }, (error, resp) => {
        if (error) {
            return response.send(' Record not found.');
        }
        response.send(resp + ' : ' + ' Record successfully updated.');
    })
}