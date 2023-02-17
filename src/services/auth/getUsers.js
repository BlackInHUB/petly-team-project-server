const {User} = require('../../models');

const getUsers = async () => {
    return await User.find()
    .select("_id name");
};

module.exports = getUsers;