const {Message, User} = require('../../models');

const readed = async (userId, messageId) => {
    // await Message.findByIdAndUpdate(messageId, {readed: true}, {new: true});
    await User.findByIdAndUpdate({_id: userId}, {$set: {"receivedMessages.$[elem].": messageId}})
};

module.exports = readed;