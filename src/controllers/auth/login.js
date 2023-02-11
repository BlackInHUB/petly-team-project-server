const { errors } = require('../../helpers');
const {User, Pet} = require('../../models');
const bcrypt = require('bcrypt');
const services = require('../../services/auth');

const login = async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if (!user) {
        throw new errors.UnauthorizedError('You need to login!');
    };

    if (!await bcrypt.compareSync(password, user.password)) {
        throw new errors.UnauthorizedError('Wrong password!');
    };

    const token = await services.login(user);

    await User.findByIdAndUpdate(user._id, {token});

    const pets = await Pet.find({owner: user._id});

    const {_id, name, phone, city, birthday, avatarUrl, favorites} = user;

    res.status(200).json({
        message: 'Login success',
        user: {
            _id,
            email,
            name,
            phone,
            city,
            birthday,
            avatarUrl,
            favorites
        },
        token,
        pets
    });
};

module.exports = login;
