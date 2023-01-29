const { Schema, model } = require("mongoose");
const {handleMongooseError} = require('../helpers')

const friendSchema = new Schema({
    title: {
        type: String,
    },
    url: {
        type: String,
    },
    addressUrl: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    address: {
        type: String,
    },
    workDays: [
        {
            isOpen: Boolean,
            from: String,
            to: String
        },
    ],
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
}, { versionKey: false });

friendSchema.post("save", handleMongooseError);

const Friend = model('friend', friendSchema);

module.exports = Friend;