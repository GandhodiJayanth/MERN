const mongoose = require('mongoose');

// Creating new Instance....
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    work: {
        type: String,
        required: true
    }
});

const User = mongoose.model('USER', userSchema);

module.export = User;