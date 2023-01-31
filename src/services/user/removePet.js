const {Pet} = require('../../models');

const removePet = async (pet) => {
    console.log(pet)
    return await Pet.findOneAndDelete(pet);
};

module.exports = removePet;