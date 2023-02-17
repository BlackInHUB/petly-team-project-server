const {Pet} = require('../../models');

const removePet = async (pet) => {
    return await Pet.findOneAndDelete(pet);
};

module.exports = removePet;