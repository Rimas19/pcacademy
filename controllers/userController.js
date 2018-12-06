const User = require('../models/userModel');
const okta = require('@okta/okta-sdk-nodejs');

const passport = require('passport');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config');

exports.signUp = async function (request, response) {
    response.json({
        message: 'Sign up sucessful',
        user: request.user
    });
}

exports.login = async function (request, response) {
    passport.authenticate('login', async (error, user, info) => {
        try {
            if (error || !user) {
                response.send(info);
            }

            request.login(user, { session: false }, async (error) => {
                if (error) {
                    response.send(error);
                }
                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, CONFIG.JWT_SECRET);
                response.json({ token });
            });

        } catch (err) {
            response.send(err.message);
        }

    })(request, response);
}


exports.create = (request, response) => {
    let user = new User({
        email: request.body.userEmail,
        password: request.body.userPassword,
        role: request.body.userRole,
        isActive: request.body.userIsActive
    });

    user.save((error, resp) => {
        if (error) {
            console.log(error);
        }
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