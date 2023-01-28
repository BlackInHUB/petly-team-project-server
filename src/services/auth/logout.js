const {User} = require('../../models');

const logout = async (userId) => {
    await User.findByIdAndUpdate(userId, {token: ''});
};

module.exports = logout;