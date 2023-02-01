const services = require('../../services/user');

const favorite = async (req, res) => {
    const {_id} = req.user;
    const {id: noticeId} = req.params;

    const result = await services.favorite(_id, noticeId);

    res.status(200).json(result);
};

module.exports = favorite;