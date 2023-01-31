const {Notice} = require('../../models');

const getOne = async (id) => {
    return await Notice.findById(id);
};

module.exports = getOne;