const { News } = require('../../models');

const getAll = async(req, res) => {
    const { page = 1, limit = 6 } = req.query;
    console.log(page, limit)
    const skip = (page - 1) * limit;
    const news = await News.find({}) 
        .skip(skip) 
        .limit(limit) 
        .sort({date: -1});
    
    res.json(news)
}

module.exports = getAll;

