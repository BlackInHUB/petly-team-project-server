const express = require('express');
const ctrls = require('../../controllers/user');
const messagesCtrls = require('../../controllers/messages');
const {asyncWrapper} = require('../../helpers');
const {authMiddleware, uploadMiddleware} = require('../../middlewares');

const router = new express.Router();

router.get('/current', authMiddleware, asyncWrapper(ctrls.current));

router.get('/all', asyncWrapper(ctrls.getAll));

router.post('/pet/add',
    authMiddleware,
    uploadMiddleware.single('photoUrl'),
    asyncWrapper(ctrls.addpet));

router.delete('/pet/:id', authMiddleware, asyncWrapper(ctrls.removePet));

router.post('/messages/:id', authMiddleware, asyncWrapper(messagesCtrls.newMessage));

router.get('/messages', authMiddleware, asyncWrapper(messagesCtrls.get));

router.post('/messages/remove/:id', authMiddleware, asyncWrapper(messagesCtrls.remove));

router.get('/messages/readed/:id', authMiddleware, asyncWrapper(messagesCtrls.readed));

module.exports = router;