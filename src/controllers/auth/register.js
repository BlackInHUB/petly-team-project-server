const {User} = require('../../models');
const services = require('../../services/auth');
const jwt = require('jsonwebtoken');
const {errors} = require('../../helpers');

const register = async (req, res) => {
    const {email} = req.body;

    const user = await User.findOne({email});

    if (user) {
        throw new errors.ConflictError('Email in use!');
    };

    const result = await services.register({...req.body});

    const payload = {
        _id: result._id,
        name: result.name,
        email: result.email
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '6h'});

    await User.findByIdAndUpdate(result._id, {token});

    res.status(201).json({
        message: 'User created',
        user: {
            id: result._id,
            email: result.email,
            name: result.name,
            phone: result.phone,
            city: result.city,
            birthday: result.birthday,
            avatarUrl: result.avatarUrl
        },
        token
    })
};

module.exports = register;