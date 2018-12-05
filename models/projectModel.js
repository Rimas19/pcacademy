const mongoose = require('mongoose');
const address = require('../entities/address')

const Schema = mongoose.Schema;


let ProjectSchema = new Schema({
    projectName: { type: String, required: true },
    projectDescription: { type: String, max: 250 },
    projectAddress: address,
    projectPrice: { type: Number, require: true },
    projectIsActive: { type: Boolean, required: true }
});

module.exports = mongoose.model('Project', ProjectSchema);