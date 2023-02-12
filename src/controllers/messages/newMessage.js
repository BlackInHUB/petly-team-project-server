const services = require('../../services/messages');

const newMessage = async (req, res) => {
    const {_id: sender} = req.user;
    const {id: recipient} = req.params;

    const result = await services.newMessage(sender, recipient, req.body);

    res.status(200).json(result);
};

module.exports = newMessage;