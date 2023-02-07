const {Notice} = require('../../models');

const getAll = async (category, {filter}) => {
    if (filter) {
        return await Notice.find({category, title: {$regex: filter, "$options": 'i'}})
        .sort({createdAt: -1});
    };
    
    return await Notice.find({category})
        .sort({createdAt: -1});
};

module.exports = getAll;