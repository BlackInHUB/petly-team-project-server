const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('../../helpers');
const {authMiddleware, uploadMiddleware, passport} = require('../../middlewares');
const ctrls = require('../../controllers/auth');

router.get('/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}));

router.get('/google/callback', passport.authenticate('google', {
    session: false
}, asyncWrapper(ctrls.google)))

router.post('/register',
    uploadMiddleware.single('avatar'),
    asyncWrapper(ctrls.register));

router.post('/login', asyncWrapper(ctrls.login));

router.patch('/update', authMiddleware,
    uploadMiddleware.single('avatar'),
    asyncWrapper(ctrls.update));

router.get('/logout', authMiddleware, asyncWrapper(ctrls.logout));

router.get('/current', authMiddleware, asyncWrapper(ctrls.current));

module.exports = router;

