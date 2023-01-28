const {User} = require('../../models');

const update = async (userId, body) => {
    return await User.findByIdAndUpdate(userId, body, {new: true});
};

module.exports = update;