const services = require('../../services/auth');

const getUsers = async (req, res) => {
    const result = await services.getUsers();

    res.status(200).json(result);
};

module.exports = getUsers;