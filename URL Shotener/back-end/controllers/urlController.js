const Url = require('../models/Url');
const shortid = require('shortid');

exports.createShortUrl = async (req, res) => {
    const { longUrl } = req.body;

    try {
        const shortUrl = shortid.generate();
        const url = new Url({ longUrl, shortUrl });
        await url.save();

        res.status(201).json({ shortUrl });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getShortUrl = async (req, res) => {
    const { shortUrl } = req.params;

    try {
        const url = await Url.findOne({ shortUrl });
        if (!url) return res.status(404).json({ message: 'URL not found.' });

        url.clicks += 1;
        await url.save();

        res.redirect(url.longUrl);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUrlStats = async (req, res) => {
    try {
        const urls = await Url.find();
        res.status(200).json(urls);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
