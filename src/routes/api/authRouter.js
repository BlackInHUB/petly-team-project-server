const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('../../helpers');
const {authValidation} = require('../../middlewares');
const ctrls = require('../../controllers/auth');

router.post('/register', asyncWrapper(ctrls.register));
router.post('/login', asyncWrapper(ctrls.login));
router.patch('/update', authValidation, asyncWrapper(ctrls.update));
router.get('/logout', authValidation, asyncWrapper(ctrls.logout));
router.get('/current', authValidation, asyncWrapper(ctrls.current));

module.exports = {authRouter: router};

