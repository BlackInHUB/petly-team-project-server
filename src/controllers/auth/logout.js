const { errors } = require('../../helpers');
const {User} = require('../../models');
const services = require('../../services/auth');

const logout = async (req, res) => {
    const {_id} = req.user;

    const user = await User.findById(_id);

    if (!user) {
        throw new errors.UnauthorizedError('You need to log in!');
    };

    await services.logout(_id);

    res.status(200).json({
        message: 'Logout success'
    });
};

module.exports = logout;
