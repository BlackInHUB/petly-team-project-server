const express = require('express');
const router = new express.Router();

const asyncWrapper = require('../../helpers/asyncWrapper');
const ctrls = require('../../controllers/auth');

router.post('/register', asyncWrapper(ctrls.register));
router.post('/login', asyncWrapper(ctrls.login));

module.exports = {authRouter: router};

