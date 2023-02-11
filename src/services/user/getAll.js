const {User} = require('../../models');

const getAll = async () => {
    return await User.find()
    .select("_id name");
};

module.exports = getAll;