const services = require('../../services/messages');

const remove = async (req, res) => {
    const {_id} = req.user;
    const {id: messageId} = req.params;
    const {box} = req.body;

    const result = await services.remove(_id, box, messageId);

    res.status(200).json(result);
};

module.exports = remove;