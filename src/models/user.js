const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new mongoose.Schema({
    username: {
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
    birthdat: {
        type: String,
    },
    phone: {
        type: String,
    },
    city: {
        type: String,
    },
    avatarUrl: {
        type: String,
        required: true
    },
    token: {
        type: String,
    },
    favorites: {
        type: Array,
        default: []
    }
}, {versionKey: false});

userSchema.pre('save', async function() {
    if (this.isNew) {
        this.password = await bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    };
});

const User = mongoose.model('User', userSchema);

module.exports = User;