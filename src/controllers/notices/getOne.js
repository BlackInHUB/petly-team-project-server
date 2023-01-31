const services = require('../../services/notices');

const getOne = async (req, res) => {
    const {id} = req.params;

    const notice = await services.getOne(id);

    res.status(200).json(notice)
};

module.exports = getOne;