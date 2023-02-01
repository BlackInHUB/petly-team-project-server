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
        default: 'http://res.cloudinary.com/dazfphdfk/image/upload/v1674989096/avatar/f7fe99ee-38e2-4d97-8949-ede72af1d996-noAvatar.png.png'
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