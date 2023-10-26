const express = require('express');
const router = express.Router();
const contactController = require('../app/controllers/ContactController');

router.post('/opinion', contactController.opinion);
router.use('/', contactController.index);

module.exports = router;