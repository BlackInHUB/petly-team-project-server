const services = require('../../services/notices');

const getFavorites = async (req, res) => {
    // const {page = 1, limit = 4} = req.query;
    const {_id} = req.user;
    // const skip = (page - 1) * limit;

    const favorites = await services.getFavorites(_id);

    res.status(200).json(favorites);
};

module.exports = getFavorites;