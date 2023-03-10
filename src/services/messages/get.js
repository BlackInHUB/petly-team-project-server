const {User} = require('../../models');

const get = async (userId) => {
    const messages = await User.findById(userId, {messages: 1, _id: 0}).populate({
        path: 'messages',
        model: 'Message',
        options: {sort: {createdAt: -1}}
    })

    return messages;
};

module.exports = get;