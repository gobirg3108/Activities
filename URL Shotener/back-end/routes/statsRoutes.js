const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');
const authMiddleware = require('../utils/authMiddleware');

router.get('/', authMiddleware, statsController.getStats);

module.exports = router;
