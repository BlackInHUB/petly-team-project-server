const {User} = require('../models');
const jwt = require('jsonwebtoken');
const { errors } = require('../helpers');

const authValidation = async (req, res, next) => {
    const {authorization = ''} = req.headers;
    const [tokenType, token] = authorization.split(' ');

    if (tokenType !== 'Bearer' || !token) {
        throw new errors.UnauthorizedError('You need to log in!')
    };

    try {
        const {_id} = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(_id);

        if (!user || !user.token) {
            throw new errors.UnauthorizedError('You need to log in!')
        };

        req.user = user;
        next();
    } catch (error) {
        next(new errors.BaseError('Something goes wrong, try again'))
    }
};

module.exports = authValidation;