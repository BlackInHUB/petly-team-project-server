const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: emailRegexp
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        default: '01-01-1900'
    },
    phone: {
        type: String,
        default: '+380000000000'
    },
    city: {
        type: String,
        default: ''
    },
    avatarUrl: {
        type: String,
        default: 'https://res.cloudinary.com/dazfphdfk/image/upload/v1675426917/avatar/bee5de3b-57da-494d-b819-95cb5f2bebd0-defaultUserPhoto.png'
    },
    token: {
        type: String,
    },
    favorites: {
        type: [
            { type: mongoose.Schema.Types.ObjectId, ref: "Notice" }
        ]
    }
}, {versionKey: false});

userSchema.pre('save', async function() {
    if (this.isNew) {
        this.password = await bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    };
});

const User = mongoose.model('User', userSchema);

module.exports = User;