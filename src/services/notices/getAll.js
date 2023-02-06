const {Notice} = require('../../models');

const getAll = async (category, page, limit, filter) => {
    const skip = (page - 1) * limit;

    if (filter !== '') {
        return await Notice.find({category,  title: {$regex: filter, "$options": 'i'}})
        .sort({createdAt: -1});
    };
    
    return await Notice.find({category})
        .skip(skip)
        .limit(limit)
        .sort({createdAt: -1});
};

module.exports = getAll;