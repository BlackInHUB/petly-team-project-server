const {Message, User} = require('../../models');

const newMessage = async (sender, recipient, message) => {
    const newMessage = await Message.create({sender, recipient, ...message});
    await User.findByIdAndUpdate(sender, {$push: {"messages": newMessage}});
    await User.findByIdAndUpdate(recipient, {$push: {"messages": newMessage}});

    return newMessage;
};

module.exports = newMessage;