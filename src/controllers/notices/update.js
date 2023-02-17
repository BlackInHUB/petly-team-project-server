const services = require('../../services/notices');

const update = async (req, res) => {
    const {id: _id} = req.params;
    const {_id: owner} = req.user;

    const result = await services.update(_id, owner, req.body);

    res.status(200).json(result);
};

module.exports = update;