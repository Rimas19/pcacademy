const express = require('express');
const CONFIG = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const user = require('./routes/userRoutes');
const customers = require('./routes/customerRoutes');
const suppliers = require('./routes/supplierRoutes');
const projects = require('./routes/projectRoutes');
const invoices = require('./routes/invoiceRoutes');
const handleError = require('./errorHandler');

// mongoose.connect(CONFIG.CONNECTION_STRING)
// mongoose.Promise = global.Promise;

if (process.env.NODE_ENV && process.env.NODE_ENV === 'test') {
    mongoose.connect(CONFIG.CONNECTION_STRING_TEST)
}
else {
    mongoose.connect(CONFIG.CONNECTION_STRING)
}


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users', user);
app.use('/customers', customers);
app.use('/suppliers', suppliers);
app.use('/projects', projects);
app.use('/invoices', invoices);

app.listen(CONFIG.PORT, () => {
    console.log('Server started!');
})

module.exports = app;
