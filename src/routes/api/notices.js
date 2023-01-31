const express = require('express');
const {authMiddleware, uploadMiddleware} = require('../../middlewares');
const {asyncWrapper} = require('../../helpers')
const ctrls = require('../../controllers/notices');

const router = new express.Router();

router.post('/',
    authMiddleware,
    uploadMiddleware.single('petPhoto'),
    asyncWrapper(ctrls.addNotice));

router.get('/category/:category', asyncWrapper(ctrls.getAll));

router.get('/:id', asyncWrapper(ctrls.getOne));

router.delete('/:id', authMiddleware, asyncWrapper(ctrls.remove));

router.get('/by/user', authMiddleware, asyncWrapper(ctrls.getOwn));

module.exports = router;