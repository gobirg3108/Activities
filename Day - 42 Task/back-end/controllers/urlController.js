const Url = require('../models/Url');
const shortid = require('shortid');
const validUrl = require('valid-url');

exports.createShortUrl = async (req, res) => {
  const { longUrl } = req.body;

  if (!validUrl.isUri(longUrl)) {
    return res.status(400).json({ message: 'Invalid URL' });
  }

  try {
    const shortId = shortid.generate();
    const shortUrl = `${req.protocol}://${req.get('host')}/${shortId}`;

    const url = new Url({
      longUrl,
      shortId,
      shortUrl,
    });

    await url.save();

    res.status(201).json({ shortUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.redirectToLongUrl = async (req, res) => {
  const { shortId } = req.params;

  try {
    const url = await Url.findOne({ shortId });

    if (!url) {
      return res.status(404).json({ message: 'URL not found' });
    }

    url.clicks += 1;
    await url.save();

    res.redirect(url.longUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUrlStats = async (req, res) => {
  try {
    const totalUrlsToday = await Url.countDocuments({
      createdAt: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) }
    });
    const totalUrlsThisMonth = await Url.countDocuments({
      createdAt: { $gte: new Date(new Date().setDate(1)) }
    });

    res.status(200).json({
      totalUrlsToday,
      totalUrlsThisMonth
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllUrls = async (req, res) => {
  try {
    const urls = await Url.find();
    res.status(200).json(urls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
