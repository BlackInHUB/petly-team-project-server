const {Notice} = require('../../models');

const addNotice = async (notice) => {
    return await Notice.create(notice);
};

module.exports = addNotice;
