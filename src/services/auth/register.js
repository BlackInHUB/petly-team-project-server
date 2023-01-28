const User = require('../../models/auth/userModel');

const register = async (user) => {
    return await User.create(user);
};

module.exports = register;