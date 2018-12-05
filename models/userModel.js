const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// let UserSchema = new Schema({
//     userName: { type: String, required: true, max: 50, unique: true },
//     userPassword: { type: String, required: true },
//     userRole: { type: String, required: true },
//     userEmail: { type: String, required: true, unique: true },
//     userLogin: { type: String, required: true, unique: true },
//     userIsActive: { type: Boolean, required: true }
// });


let UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String },
    isActive: { type: Boolean }
});

UserSchema.pre('save', createHashedPassword);

async function createHashedPassword(next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
}

UserSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);