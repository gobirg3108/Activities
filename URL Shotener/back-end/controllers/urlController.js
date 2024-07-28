const URL = require('../models/URL');
const crypto = require('crypto');

exports.createShortUrl = async (req, res) => {
  const { longUrl } = req.body;

  try {
    const shortUrl = crypto.randomBytes(6).toString('hex');
    const newUrl = new URL({ longUrl, shortUrl });
    await newUrl.save();

    res.json(newUrl);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.redirect = async (req, res) => {
    try {
      const url = await URL.findOne({ shortUrl: req.params.shortUrl });
  
      if (!url) {
        return res.status(404).json({ message: 'URL not found' });
      }
  
      url.clicks++;
      await url.save();
  
      res.redirect(url.longUrl);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  

exports.getUrls = async (req, res) => {
  try {
    const urls = await URL.find();
    res.json(urls);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
