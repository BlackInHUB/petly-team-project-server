const {Notice} = require('../../models');

const getAll = async (category, page, limit, filter) => {
    const skip = (page - 1) * limit;

    if (filter !== '') {
        return await Notice.find({category,  title: {$regex: filter, "$options": 'i'}});
    };
    
    return await Notice.find({category})
        .skip(skip)
        .limit(limit);
};

module.exports = getAll;