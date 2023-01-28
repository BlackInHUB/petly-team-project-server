const { errors } = require('../../helpers');
const User = require('../../models/auth/userModel');
const services = require('../../services/auth');

const update = async (req, res) => {
    const {_id} = req.user;

    const user = await User.findById(_id);

    if (!user) {
        throw new errors.UnauthorizedError('You need to log in!')
    };

    await services.update(_id, req.body);

    res.status(200).json({
        message: 'User updated',
        user: req.body
    })
};

module.exports = update;