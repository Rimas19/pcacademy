const Customer = require('../models/customerModel');

exports.create = (request, response) => {
    let customer = new Customer({
        customerName: request.body.customerName,
        customerAddress: {
            Street: request.body.customerAddress.Street,
            City: request.body.customerAddress.City,
            Code: request.body.customerAddress.Code
        },
        customerCode: request.body.customerCode,
        customerVATCode: request.body.customerVATCode,
        customerIsActive: request.body.customerIsActive
    });
    console.log(customer)
    customer.save(() => {
        response.send('Record successfully created.');
    });
}

exports.get = (request, response) => {
    Customer.find((error, customers) => {
        response.send(customers);
    })
}

exports.read = (request, response) => {
    Customer.findById(request.query.id, (error, resp) => {
        if (error) {
            return response.send(resp + ' : ' + ' Record nor found.');
        }
        response.send(resp);
    })
}

exports.delete = (request, response) => {
    Customer.findByIdAndDelete(request.query.id, (error, resp) => {
        if (error) {
            return response.send(error);
        }
        response.send(resp + ' : ' + ' Record successfully deleted.');
    })
}

exports.update = (request, response) => {
    Customer.findByIdAndUpdate(request.query.id, { $set: request.body }, (error, resp) => {
        if (error) {
            return response.send(' Record not found.');
        }
        response.send(resp + ' : ' + ' Record successfully updated.');
    })
}