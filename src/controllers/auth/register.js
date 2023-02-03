const {User} = require('../../models');
const services = require('../../services/auth');
const {errors} = require('../../helpers');

const register = async (req, res) => {
    const {email} = req.body;

    const user = await User.findOne({email});

    if (user) {
        throw new errors.ConflictError('Email in use!');
    };

    const result = await services.register({...req.body});

    res.status(201).json({
        message: 'User created',
        user: {
            _id: result._id
        }
    })
};

module.exports = register;