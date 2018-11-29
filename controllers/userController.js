const User = require('../models/userModel');

exports.create = (request, response) => {
    let user = new User({
        userName: request.body.userName,
        userPassword: request.body.userPassword,
        userRole: request.body.userRole,
        userIsActive: request.body.userIsActive
    });

    user.save(() => {
        response.send('Record successfully created.');
    });
}

exports.get = (request, response) => {
    User.find((error, users) => {
        response.send(users);
    })
}

exports.read = (request, response) => {
    User.findById(request.query.id, (error, resp) => {
        if (error) {
            return response.send(resp + ' : ' + ' Record nor found.');
        }
        response.send(resp);
    })
}

exports.delete = (request, response) => {
    User.findByIdAndDelete(request.body.id, (error, resp) => {
        if (error) {
            return response.send(error);
        }
        response.send(resp + ' : ' + ' Record successfully deleted.');
    })
}

exports.update = (request, response) => {
    User.findByIdAndUpdate(request.body.id, { $set: request.body }, (error, resp) => {
        if (error) {
            return response.send(error);
        }
        response.send(resp + ' : ' + ' Record successfully updated.');
    })
}