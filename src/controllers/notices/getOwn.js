const { errors } = require('../../helpers');
const services = require('../../services/notices');

const getOwn = async (req, res) => {
    const {_id} = req.user;

    const notices = await services.getOwn(_id);

    if (!notices) {
        throw new errors.NotFoundError(`User with id: '${_id} has no notices yet'`);
    };

    res.status(200).json(notices);
};

module.exports = getOwn;