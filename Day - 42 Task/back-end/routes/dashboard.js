const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const URL = require('../models/URL');

router.get('/stats', auth, async (req, res) => {
  try {
    // Example: Fetch stats for URLs created by the authenticated user
    const urls = await URL.find({ createdBy: req.user.id });

    // Sample data processing
    const labels = urls.map(url => url.createdAt.toISOString().slice(0, 10));
    const values = urls.map(url => url.clicks);

    res.json({ labels, values });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
