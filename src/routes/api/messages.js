const express = require('express');

const messagesCtrls = require('../../controllers/messages');
const {asyncWrapper} = require('../../helpers');
const {authMiddleware} = require('../../middlewares');

const router = new express.Router();

router.post('/:id', authMiddleware, asyncWrapper(messagesCtrls.newMessage));

router.get('/', authMiddleware, asyncWrapper(messagesCtrls.get));

router.get('/remove/:id', authMiddleware, asyncWrapper(messagesCtrls.remove));

router.get('/readed/:id', authMiddleware, asyncWrapper(messagesCtrls.readed));

module.exports = router;