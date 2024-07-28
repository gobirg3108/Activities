const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');
const authMiddleware = require('../utils/authMiddleware');

router.post('/shorten', authMiddleware, urlController.createShortUrl);
router.get('/:shortUrl', urlController.redirect);  // Ensure this route is correctly defined
router.get('/', authMiddleware, urlController.getUrls);

module.exports = router;
