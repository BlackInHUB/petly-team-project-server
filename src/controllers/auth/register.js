const {User} = require('../../models');
const services = require('../../services/auth');
const {errors} = require('../../helpers');
const gravatar = require('gravatar');

const register = async (req, res) => {
    const {email} = req.body;

    const user = await User.findOne({email});

    if (user) {
        throw new errors.ConflictError('Email in use!');
    };

    const avatarUrl = gravatar.url(email);

    const result = await services.register({...req.body, avatarUrl});

    const token = await services.login(result);

    await User.findByIdAndUpdate(result._id, {token});

    res.status(201).json({
        message: 'User created.',
        user: {
            id: result._id,
            username: result.username,
            email: result.email,
            avatarUrl: result.avatarUrl
        },
        token
    })
};

module.exports = register;