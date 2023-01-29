const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    birthday: {
        String,
        default: ''
    },
    breed: {
        type: String,
        default: ''
    },
    comments: {
        type: String,
        default: ''
    },
    photoUrl: {
        type: String,
        default: ''
    }
}, {versionKey: false});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
