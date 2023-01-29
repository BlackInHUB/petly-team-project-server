const { Friend } = require('../../models');

const getAll = async(req, res) => {

    const news = await Friend.find({}, "-workDays._id").sort({title: 1});
    
    res.json(news)
}

module.exports = getAll;