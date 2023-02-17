const register = require('./register');
const login = require('./login');
const update = require('./update');
const logout = require('./logout');
const profile = require('./profile');
const getUsers = require('./getUsers');
const current = require('./current')

module.exports = {
    register,
    login,
    update,
    logout,
    profile,
    getUsers,
    current
};
