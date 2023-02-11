const services = require('../../services/auth');

const profile = async (req, res) => {
    const {id} = req.params;

    const result = await services.profile(id);

    res.status(200).json(result);
};

module.exports = profile;