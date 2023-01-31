const services = require('../../services/notices');

const getAll = async (req, res) => {
    const {category} = req.params;

    const notices = await services.getAll(category);

    res.status(200).json(notices);
};

module.exports = getAll;