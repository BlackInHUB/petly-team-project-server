const mongoose = require('mongoose');

const messageShchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    readed: {
        type: Boolean,
        default: false
    }
}, {versionKey: false, timestamps: true});

const Message = mongoose.model('Message', messageShchema);

module.exports = Message;