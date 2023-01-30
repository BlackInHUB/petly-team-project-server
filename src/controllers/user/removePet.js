const { NotFoundError } = require('../../helpers/errors');
const {Pet} = require('../../models');

const removePet = async(req, res) => {
    const {id} = req.params;
    
    const result = await Pet.findByIdAndRemove(id);

    if (!result) {
        throw new NotFoundError(`Pet with ${id} not found`)
    };

    res.status(200).json({
        message: 'Pet deleted :('
    });
};

module.exports = removePet;