const {Notice} = require('../../models');

const getAll = async (category) => {
    return await Notice.find({category});
};

module.exports = getAll;