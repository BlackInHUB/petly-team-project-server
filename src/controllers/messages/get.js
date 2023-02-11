const services = require('../../services/messages');

const get = async (req, res) => {
    const {_id} = req.user;

    const result = await services.get(_id);

    res.status(200).json(result);
};

module.exports = get;