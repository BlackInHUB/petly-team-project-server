const services = require('../../services/notices');

const getAll = async (req, res) => {
    const {category} = req.params;

    const notices = await services.getAll(category, req.query);

    res.status(200).json(notices);
};

module.exports = getAll;