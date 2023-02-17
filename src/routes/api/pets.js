const express = require('express');
const ctrls = require('../../controllers/pets');
const {asyncWrapper} = require('../../helpers');
const {authMiddleware, uploadMiddleware} = require('../../middlewares');

const router = new express.Router();

router.post('/add',
    authMiddleware,
    uploadMiddleware.single('photoUrl'),
    asyncWrapper(ctrls.addpet));

router.patch('/update/:id', authMiddleware, asyncWrapper(ctrls.update));

router.delete('/:id', authMiddleware, asyncWrapper(ctrls.removePet));

module.exports = router;