const {Notice} = require('../../models');

const getOne = async (id) => {
    return await Notice.findById(id).populate({
        path: 'owner',
        model: 'User',
        select: 'phone email'
    });
};

module.exports = getOne;