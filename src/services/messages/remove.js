const {User} = require('../../models');

const remove = async (_id, messageId) => {
    return await User.findByIdAndUpdate(_id, {$pull: {"messages": {"_id": messageId}}}, {new: true});
};

module.exports = remove;