const { errors } = require('../../helpers');
const {User, Pet} = require('../../models');

const current = async (req, res) => {
    const {_id} = req.user;

    const user = await User.findById(_id, '-password, -token');
    const pets = await Pet.find({owner: _id});

    if (!user) {
        res.status(401).json({
            message: 'Unauthorized'
        });
    };

    res.status(200).json({user, pets});
};

module.exports = current;