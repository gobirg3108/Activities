const express = require('express');
const router = express.Router();
const URL = require('../models/URL');
const auth = require('../middleware/auth');

// Get URL statistics
router.get('/stats', auth, (req, res) => {
  URL.find({ createdBy: req.user.id }).then(urls => {
    const totalUrls = urls.length;
    const totalClicks = urls.reduce((acc, url) => acc + url.clicks, 0);

    res.json({ totalUrls, totalClicks });
  }).catch(err => res.status(500).json('Server error'));
});

module.exports = router;
