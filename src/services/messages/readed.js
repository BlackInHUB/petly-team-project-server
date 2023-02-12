const {Message, User} = require('../../models');

const readed = async (userId, messageId) => {
    const message = await Message.findByIdAndUpdate(messageId, {readed: true}, {new: true});
    await User.updateOne({_id: userId, "messages._id": messageId}, {$set: {"messages.$.readed": true}});
    return message;
};

module.exports = readed;