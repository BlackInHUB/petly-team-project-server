const { errors } = require('../../helpers');
const {User} = require('../../models');

const current = async (req, res) => {
    const {_id} = req.user;

    const user = await User.findById(_id, '-password');

    if (!user) {
        throw new errors.UnauthorizedError('You need to log in!');
    };

    res.status(200).json({user});
};

module.exports = current;