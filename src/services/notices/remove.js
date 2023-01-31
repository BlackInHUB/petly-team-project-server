const {Notice} = require('../../models');

const remove = async (notice) => {

    return await Notice.findOneAndDelete(notice);
};

module.exports = remove;