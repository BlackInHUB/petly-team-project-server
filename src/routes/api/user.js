const express = require('express');
const ctrls = require('../../controllers/user');
const {asyncWrapper} = require('../../helpers');
const {authMiddleware, uploadMiddleware} = require('../../middlewares');

const router = new express.Router();

router.get('/current', authMiddleware, asyncWrapper(ctrls.current));

router.post('/pet/add',
    authMiddleware,
    uploadMiddleware.single('photoUrl'),
    asyncWrapper(ctrls.addpet));

router.delete('/pet/:id', authMiddleware, asyncWrapper(ctrls.removePet));

router.get('/favorites/:id', authMiddleware, asyncWrapper(ctrls.favorites));

module.exports = router;