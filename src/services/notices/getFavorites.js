const {User} = require('../../models');

const getFavorites = async (_id) => {
    return await User.findById(_id, {favorites: 1, _id: 0}).populate({
        path: 'favorites',
        model: 'Notice'
    });

};

module.exports = getFavorites;