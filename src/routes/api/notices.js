const express = require('express');
const {authMiddleware, uploadMiddleware} = require('../../middlewares');
const {asyncWrapper} = require('../../helpers')
const ctrls = require('../../controllers/notices');

const router = new express.Router();

router.post('/',
    authMiddleware,
    uploadMiddleware.single('petPhoto'),
    asyncWrapper(ctrls.addNotice));

router.get('/:category', asyncWrapper(ctrls.getAll));

router.get('/details/:id', asyncWrapper(ctrls.getOne));

router.delete('/:id', authMiddleware, asyncWrapper(ctrls.remove));

router.get('/user/own', authMiddleware, asyncWrapper(ctrls.getOwn));

module.exports = router;