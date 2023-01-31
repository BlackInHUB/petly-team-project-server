const {Notice} = require('../../models');

const getOwn = async (owner) => {
    return await Notice.find({owner});
};

module.exports = getOwn;