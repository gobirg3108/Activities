const express = require('express');
const { createShortUrl, getShortUrl, getUrlStats } = require('../controllers/urlController');
const router = express.Router();

router.post('/shorten', createShortUrl);
router.get('/:shortUrl', getShortUrl);
router.get('/stats', getUrlStats);

module.exports = router;
