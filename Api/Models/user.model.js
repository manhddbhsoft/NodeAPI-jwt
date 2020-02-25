//define indepencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    token: String,
    username: {type: String, required: true},
    bio: String,
    image: String,
    password: {type: String, required: true},
    following: Boolean
});

const User = mongoose.model('user', userSchema);
module.exports = User;
