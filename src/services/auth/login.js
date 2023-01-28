const jwt = require('jsonwebtoken');

const login = async ({_id, username, email}) => {
    const payload = {
        _id,
        username,
        email
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '6h'});
};

module.exports = login;