const {User} = require('../../models');

const remove = async (_id, box, messageId) => {
    if (box === 'sent') {
        return await User.findByIdAndUpdate(_id, {$pull: {"sentMessages": messageId}}, {new: true});
    };

    return await User.findByIdAndUpdate(_id, {$pull: {"receivedMessages": messageId}}, {new: true});
};

module.exports = remove;