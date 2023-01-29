const { errors } = require('../../helpers');
const {User} = require('../../models');
const services = require('../../services/auth');
const cloudUpload = require('../../services/cloudUpload');

const update = async (req, res) => {
    const {_id} = req.user;

    const user = await User.findById(_id);

    if (!user) {
        throw new errors.UnauthorizedError('You need to log in!')
    };

    if (req.file) {
        const {path, fieldname, filename} = req.file;
        const {url: avatarUrl} = await cloudUpload(path, fieldname, filename);

        await services.update(_id, {avatarUrl});

        return res.status(200).json({
            message: 'User updated',
            user: {
                [fieldname]: avatarUrl
            }
        });
    };

    await services.update(_id, req.body);

    res.status(200).json({
        message: 'User updated',
        user: req.body
    })
};

module.exports = update;