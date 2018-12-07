const express = require('express');
const CONFIG = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const user = require('./routes/user');
const customers = require('./routes/customerRoutes');
const suppliers = require('./routes/supplierRoutes');
const projects = require('./routes/projectRoutes');
const invoices = require('./routes/invoiceRoutes');
const handleError = require('./errorHandler');


require('./authentication/localStrategy');
require('./authentication/jwtStrategy');

if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') {
    mongoose.connect(CONFIG.CONNECTION_STRING_TEST)
}
else {
    mongoose.connect(CONFIG.CONNECTION_STRING)
}

mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user', user);
app.use('/customers', customers);
app.use('/suppliers', suppliers);
app.use('/projects', projects);
app.use('/invoices', invoices);
app.use(handleError);

app.listen(CONFIG.PORT, () => {
    console.log('Server started!');
})

module.exports = app;

