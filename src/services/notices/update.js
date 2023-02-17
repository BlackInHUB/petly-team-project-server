const {Notice} = require('../../models');

const update = async (_id, owner, body) => {
    return await Notice.findOneAndUpdate({_id, owner}, body, {new: true});
};

module.exports = update;