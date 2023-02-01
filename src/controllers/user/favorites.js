const services = require('../../services/user');

const favorites = async (req, res) => {
    const {_id} = req.user;
    const {id: noticeId} = req.params;

    const result = await services.favorites(_id, noticeId);

    res.status(200).json({
        message: `User with id: '${_id}' favorites updated`,
        favorites: result.favorites
    });
};

module.exports = favorites;