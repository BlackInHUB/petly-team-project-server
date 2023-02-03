const { errors } = require('../../helpers');
const {User, Pet} = require('../../models');

const current = async (req, res) => {
    const {page = 1, limit = 3} = req.query;
    const {_id} = req.user;
    const skip = (page - 1) * limit;

    const user = await User.findById(_id, '-password, -token');
    const pets = await Pet.find({owner: _id})
        .skip(skip)
        .limit(limit);  

    if (!user) {
        throw new errors.UnauthorizedError('You need to log in!');
    };

    res.status(200).json({user, pets});
};

module.exports = current;