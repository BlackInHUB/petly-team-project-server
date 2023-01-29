const express = require('express');

const ctrl = require('../../controllers/friends');

const { asyncWrapper } = require('../../helpers');

const router = express.Router();

router.get('/', asyncWrapper(ctrl.getAll));

module.exports = router;