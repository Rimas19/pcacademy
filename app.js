const express = require('express');
const CONFIG = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const user = require('./routes/userRoutes');

mongoose.connect(CONFIG.CONNECTION_STRING)
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users', user);

app.listen(CONFIG.PORT, () => {
    console.log('Server started!');
})

