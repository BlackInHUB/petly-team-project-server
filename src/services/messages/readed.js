const {Message, User} = require('../../models');

const readed = async (userId, messageId) => {
    const message = await Message.findByIdAndUpdate(messageId, {readed: true}, {new: true});
    await User.updateOne({_id: userId, "receivedMessages._id": messageId}, {$set: {"receivedMessages.$.readed": true}});
    return message;
};

module.exports = readed;