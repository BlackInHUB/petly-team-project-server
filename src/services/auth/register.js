const {User} = require('../../models');

const register = async (user) => {
    return await User.create(user);
};

module.exports = register;