const express = require('express');
const {authMiddleware, uploadMiddleware} = require('../../middlewares');
const {asyncWrapper} = require('../../helpers')
const ctrls = require('../../controllers/notices');

const router = new express.Router();

router.post('/',
    authMiddleware,
    uploadMiddleware.single('photoUrl'),
    asyncWrapper(ctrls.addNotice));

router.get('/:category', asyncWrapper(ctrls.getAll));

router.get('/details/:id', asyncWrapper(ctrls.getOne));

router.delete('/:id', authMiddleware, asyncWrapper(ctrls.remove));

router.get('/user/own', authMiddleware, asyncWrapper(ctrls.getOwn));

router.get('/user/favorites', authMiddleware, asyncWrapper(ctrls.getFavorites));

router.get('/favorites/:id', authMiddleware, asyncWrapper(ctrls.favoritesToggle));

module.exports = router;