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


    res.status(200).json({
        message: 'Login success',
        user: {
            id: user._id,
            email: user.email,
            name: user.name,
            phone: user.phone,
            city: user.city,
            birthday: user.birthday,
            avatarUrl: user.avatarUrl,
            favorites: user.favorites
        },
        token,
        pets
    });
};

module.exports = login;
