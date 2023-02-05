const {Notice} = require('../../models');

const getAll = async (category, page, limit, filter) => {
    const skip = (page - 1) * limit;
    
    return await Notice.find({category, title: {filter}})
        .skip(skip)
        .limit(limit);
};

module.exports = getAll;