const express = require('express');
const router = express.Router();
const {
  createShortUrl,
  redirectToLongUrl,
  getUrlStats,
  getAllUrls
} = require('../controllers/urlController');
const { protect } = require('../middleware/authMiddleware');

router.post('/create', protect, createShortUrl);
router.get('/:shortId', redirectToLongUrl);
router.get('/stats', protect, getUrlStats);
router.get('/all', protect, getAllUrls);

module.exports = router;
