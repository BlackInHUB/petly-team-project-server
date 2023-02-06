const { errors } = require('../../helpers');
const services = require('../../services/user');

const removePet = async (req, res) => {
    const {_id: owner} = req.user;
    const {id: _id} = req.params;
    
    const result = await services.removePet({owner, _id});

    if (!result) {
        throw new errors.NotFoundError(`Pet with id: '${_id}' not found`)
    };

    res.status(200).json({
        message: 'Pet deleted :('
    });
};

module.exports = removePet;