const {User} = require('../../models');

const remove = async (_id, messageId) => {

    return await User.findByIdAndUpdate(_id, {$pull: {"messages": messageId}}, {new: true}).select({"messages": 1, "_id": 0});
};

module.exports = remove;