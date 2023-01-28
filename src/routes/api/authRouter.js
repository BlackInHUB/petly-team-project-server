const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('../../helpers');
const {authValidation} = require('../../middlewares');
const ctrls = require('../../controllers/auth');

router.post('/register', asyncWrapper(ctrls.register));
router.post('/login', asyncWrapper(ctrls.login));
router.patch('/update', authValidation, asyncWrapper(ctrls.update));

module.exports = {authRouter: router};

