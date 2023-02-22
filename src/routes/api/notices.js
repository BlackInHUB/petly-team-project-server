const express = require('express');
const router = new express.Router();

const {authMiddleware, uploadMiddleware} = require('../../middlewares');
const {asyncWrapper} = require('../../helpers')
const ctrls = require('../../controllers/notices');

router.post('/',
    authMiddleware,
    uploadMiddleware.single('photoUrl'),
    asyncWrapper(ctrls.addNotice));

router.get('/:category', asyncWrapper(ctrls.getAll));

router.get('/users/own', authMiddleware, asyncWrapper(ctrls.getOwn));

router.get('/users/favorites', authMiddleware, asyncWrapper(ctrls.getFavorites));

router.get('/details/:id', asyncWrapper(ctrls.getOne));

router.get('/favorites/:id', authMiddleware, asyncWrapper(ctrls.favoritesToggle));

router.patch('/update/:id', authMiddleware, asyncWrapper(ctrls.update));

router.delete('/:id', authMiddleware, asyncWrapper(ctrls.remove));

module.exports = router;