const { errors } = require('../../helpers');
const services = require('../../services/notices');

const remove = async (req, res) => {
    const {_id: owner} = req.user;
    const {id: _id} = req.params;

    const result = await services.remove({owner, _id});

    if (!result) {
        throw new errors.NotFoundError(`Notice with id: '${id}' not found`)
    };

    res.status(200).json({
        message: 'Notice deleted'
    })
};

module.exports = remove;