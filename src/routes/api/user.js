const express = require('express');

const {asyncWrapper} = require('../../helpers/asyncWrapper');
const {authMiddleware} = require('../../middlewares');

const router = new express.Router();

router.get('/current', authMiddleware, asyncWrapper(ctrls.current));