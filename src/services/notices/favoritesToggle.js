const {User} = require('../../models');

const favoritesToggle = async (_id, noticeId) => {
     if (await User.findOne({_id, 'favorites': noticeId})) {
        return await User.findByIdAndUpdate(_id, {$pull: {"favorites": noticeId}}, {new: true});
     }

     return await User.findByIdAndUpdate(_id, {$push: {"favorites": noticeId}}, {new: true});
};

module.exports = favoritesToggle;