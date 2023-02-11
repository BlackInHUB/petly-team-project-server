const services = require('../../services/user');

const getAll = async (req, res) => {
    const result = await services.getAll();

    res.status(200).json(result);
};

module.exports = getAll;