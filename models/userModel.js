const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    userName: { type: String, required: true, max: 50, unique: true },
    userPassword: { type: String, required: true },
    userRole: { type: String, required: true },
    userIsActive: { type: Boolean, required: true }
});

module.exports = mongoose.model('User', UserSchema);