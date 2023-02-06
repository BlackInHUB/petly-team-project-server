const services = require('../../services/notices');

const getAll = async (req, res) => {
    const {page = 1, limit = 8} = req.query;
    const {category} = req.params;
    const {filter = ''} = req.query;

    const notices = await services.getAll(category, page, limit, filter);

    res.status(200).json(notices);
};

module.exports = getAll;