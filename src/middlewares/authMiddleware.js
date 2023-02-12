const {User} = require('../models');
const jwt = require('jsonwebtoken');
const { errors } = require('../helpers');

const authMiddleware = async (req, res, next) => {
    const {authorization = ''} = req.headers;
    const [tokenType, token] = authorization.split(' ');

    if (tokenType !== 'Bearer' || !token) {
        next(new errors.UnauthorizedError('You need to log in!'))
        return;
    };
    
    try {
        const {_id} = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(_id);

        if (!user || !user.token) {
            next(new errors.UnauthorizedError('You need to log in!'))
            return;
        };

        req.user = user;
        next();
    } catch (error) {
        next(new errors.UnauthorizedError('You need to log in!'))
    }
};

module.exports = authMiddleware;