const {User} = require('../../models');
const services = require('../../services/auth');
const cloudUpload = require('../../services/cloudUpload');
const {errors} = require('../../helpers');

const register = async (req, res) => {
    const {email} = req.body;

    const user = await User.findOne({email});

    if (user) {
        throw new errors.ConflictError('Email in use!');
    };

    if (req.file) {
        const {path, fieldname, filename} = req.file;
        const {url: avatarUrl} = await cloudUpload(path, fieldname, filename);

        const result = await services.register({...req.body, avatarUrl});

        const token = await services.login(result);

        await User.findByIdAndUpdate(result._id, {token});

        return res.status(201).json({
            message: 'User created.',
            user: {
                id: result._id,
                username: result.username,
                email: result.email,
                city: result.city,
                birthday: result.birthday,
                phone: result.phone,
                avatarUrl: result.avatarUrl,
                token
            },
        })
        }

    const result = await services.register({...req.body});

    const token = await services.login(result);

    await User.findByIdAndUpdate(result._id, {token});

    res.status(201).json({
        message: 'User created.',
        user: {
            _id: result._id,
            username: result.username,
            email: result.email,
            city: result.city,
            birthday: result.birthday,
            phone: result.phone,
            avatarUrl: result.avatarUrl,
            token
        },
    })
};

module.exports = register;