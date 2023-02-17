const {Pet} = require('../../models');

const update = async (_id, owner, body) => {
    return await Pet.findOneAndUpdate({_id, owner}, body, {new: true});
};

module.exports = update;