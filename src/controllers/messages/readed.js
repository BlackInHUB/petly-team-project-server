const services = require('../../services/messages');

const readed = async (req, res) => {
    const {_id} = req.user;
    const {id} = req.params;

    const result = await services.readed(_id, id);

    res.status(200).json(result);
};

module.exports = readed;