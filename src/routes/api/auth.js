const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('../../helpers');
const {authMiddleware, uploadMiddleware} = require('../../middlewares');
const ctrls = require('../../controllers/auth');

router.post('/register',
    uploadMiddleware.single('avatar'),
    asyncWrapper(ctrls.register));

router.post('/login', asyncWrapper(ctrls.login));

router.patch('/update', authMiddleware,
    uploadMiddleware.single('avatar'),
    asyncWrapper(ctrls.update));

router.get('/logout', authMiddleware, asyncWrapper(ctrls.logout));

router.get('/profile/:id', authMiddleware, asyncWrapper(ctrls.profile))

router.get('/current'), authMiddleware, asyncWrapper(ctrls.current);

router.get('/users', asyncWrapper(ctrls.getUsers));

module.exports = router;

