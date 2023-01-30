const {Pet} = require('../../models');

const addPet = async (pet) => {
    return await Pet.create(pet);
};

module.exports = addPet;