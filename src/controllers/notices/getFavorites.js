const services = require('../../services/notices');

const getFavorites = async (req, res) => {
    const {_id} = req.user;

    const favorites = await services.getFavorites(_id);

    res.status(200).json(favorites);
};

module.exports = getFavorites;