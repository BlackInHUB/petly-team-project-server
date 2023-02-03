const {Notice} = require('../../models');

const getAll = async (category, page, limit) => {
    const skip = (page - 1) * limit;
    
    return await Notice.find({category})
        .skip(skip)
        .limit(limit);
};

module.exports = getAll;