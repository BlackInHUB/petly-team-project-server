const User = require('../../models/auth/userModel');

const update = async (userId, body) => {
    return await User.findByIdAndUpdate(userId, body, {new: true});
};

module.exports = update;