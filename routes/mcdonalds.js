const express = require('express');

const mcdonaldsController = require('../controllers/mcdonalds');
const errorController = require('../controllers/error');

const router = express.Router();

router.get('/', mcdonaldsController.getMcdonalds);
router.post('/loading', mcdonaldsController.postMcdonaldsLoading);
router.post('/result', mcdonaldsController.postMcdonaldsResult);
module.exports = router;
