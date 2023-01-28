const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
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
    }
});

userSchema.pre('save', async function() {
    if (this.isNew) {
        this.password = await bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    };
});

const User = mongoose.model('User', userSchema);

module.exports = User;