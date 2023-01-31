const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
    birthday: {
        type: String,
        default: 'unknown'
    },
    breed: {
        type: String,
        default: 'unknown'
    },
    location: {
        type: String,
        default: ''
    },
    price: {
        type: String
    },
    sex: {
        type: String,
        enum: ['male', 'female'],
    },
    photoUrl: {
        type: String,
        default: 'http://res.cloudinary.com/dazfphdfk/image/upload/v1675066555/avatar/07fbd5b5-dce0-4641-b3e0-c65688f7b282-noPetPhoto.png'
    },
    category: {
        type: String,
        enum: ['sell', 'lost/found', 'in good hands'],
        required: [true, 'Must be one of "sell", "lost/found", "in good hands"']
    },
    comments: {
        type: String,
        default: ''
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {versionKey: false, timestamps: true});

const Notice = mongoose.model('Notice', noticeSchema);

module.exports = Notice;