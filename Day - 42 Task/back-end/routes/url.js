const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const URL = require('../models/URL');
const auth = require('../middleware/auth');

// Create short URL
router.post('/shorten', auth, (req, res) => {
  const { longUrl } = req.body;
  const urlCode = shortid.generate();
  const shortUrl = `${req.protocol}://${req.get('host')}/${urlCode}`;

  const newUrl = new URL({
    longUrl,
    shortUrl,
    urlCode,
    createdBy: req.user.id
  });

  newUrl.save().then(url => res.json(url)).catch(err => res.status(500).json('Server error'));
});

// Redirect to original URL
router.get('/:code', (req, res) => {
  URL.findOne({ urlCode: req.params.code }).then(url => {
    if (url) {
      url.clicks++;
      url.save().then(() => res.redirect(url.longUrl));
    } else {
      res.status(404).json('No URL found');
    }
  }).catch(err => res.status(500).json('Server error'));
});

module.exports = router;
