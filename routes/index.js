const express = require('express');

const indexController = require('../controllers/index');
const errorController = require('../controllers/error');

const router = express.Router();

router.get('/', indexController.getIndex);
router.use('/400', errorController.get400);
router.use('/408', errorController.get408);
router.use('/409', errorController.get409);
router.use(errorController.get404);

module.exports = router;
