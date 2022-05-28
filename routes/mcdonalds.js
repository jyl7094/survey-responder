const express = require('express');

const mcdonaldsController = require('../controllers/mcdonalds');

const router = express.Router();

router.get('/', mcdonaldsController.getMcdonalds);
router.post('/result', mcdonaldsController.postMcdonalds);

module.exports = router;