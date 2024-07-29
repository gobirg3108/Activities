const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const URL = require('../models/URL');
const crypto = require('crypto');

// Create a new URL
router.post('/create', auth, async (req, res) => {
  const { longUrl } = req.body;

  try {
    let shortUrl;
    let urlCode;
    
    // Ensure unique shortUrl and urlCode
    do {
      shortUrl = generateShortUrl(); // Ensure this generates a unique URL
      urlCode = generateUrlCode(); // Ensure this generates a unique URL code
    } while (await URL.findOne({ shortUrl }) || await URL.findOne({ urlCode }));

    const newUrl = new URL({
      longUrl,
      shortUrl,
      urlCode,
      createdBy: req.user.id
    });

    await newUrl.save();

    res.status(201).json(newUrl);
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      res.status(400).json({ error: 'Duplicate key error' });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
});

// Utility functions for generating short URL and URL code
function generateShortUrl() {
  return `http://short.url/${crypto.randomBytes(6).toString('hex')}`;
}

function generateUrlCode() {
  return crypto.randomBytes(4).toString('hex');
}

module.exports = router;
