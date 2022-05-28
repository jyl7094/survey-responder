const express = require('express');

const indexController = require('../controllers/index');
const errorController = require('../controllers/error');

const router = express.Router();

router.get('/', indexController.getIndex);
router.use(errorController.get404);

module.exports = router;