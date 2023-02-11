const {User} = require('../../models');

const get = async (userId) => {
    const messages = await User.findById(userId, {sentMessages: 1, receivedMessages: 1, _id: 0}).populate({
        path: 'sentMessages receivedMessages',
        model: 'Message'
    })

    return messages;
};

module.exports = get;