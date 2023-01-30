const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
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
        default: 'http://res.cloudinary.com/dazfphdfk/image/upload/v1675066555/avatar/07fbd5b5-dce0-4641-b3e0-c65688f7b282-noPetPhoto.png'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {versionKey: false});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
