const express = require('express');

const pandaExpressController = require('../controllers/panda-express');

const router = express.Router();

router.get('/', pandaExpressController.getPandaExpress);
router.post('/result', pandaExpressController.postPandaExpress);

module.exports = router;