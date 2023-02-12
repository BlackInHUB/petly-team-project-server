const {User, Pet, Notice} = require('../../models');

const profile = async (id) => {
    const user = await User.findById(id, {password: 0, birthday: 0, token: 0, favorites: 0, messages: 0});
    const pets = await Pet.find({owner: id});
    const notices = await Notice.find({owner: id});

    return {user, pets, notices};
};

module.exports = profile;
