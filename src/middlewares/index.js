const authMiddleware = require('./authMiddleware');
const uploadMiddleware = require('./uploadMiddleware');
const passport = require('./passport')

module.exports = {
    authMiddleware,
    uploadMiddleware,
    passport,
};
