const jwt = require('jsonwebtoken');

const login = async ({_id, name, email}) => {
    const payload = {
        _id,
        name,
        email
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '6h'});
};

module.exports = login;