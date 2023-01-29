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
        default: 'http://res.cloudinary.com/dazfphdfk/image/upload/v1674989096/avatar/f7fe99ee-38e2-4d97-8949-ede72af1d996-noAvatar.png.png'
    }
}, {versionKey: false});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
