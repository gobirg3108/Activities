const URL = require('../models/URL');

exports.getStats = async (req, res) => {
  try {
    const today = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(today.getMonth() - 1);

    const dailyUrls = await URL.aggregate([
      {
        $match: { createdAt: { $gte: new Date(today.setHours(0, 0, 0, 0)) } },
      },
      {
        $group: {
          _id: null,
          count: { $sum: 1 },
        },
      },
    ]);

    const monthlyUrls = await URL.aggregate([
      {
        $match: { createdAt: { $gte: lastMonth } },
      },
      {
        $group: {
          _id: null,
          count: { $sum: 1 },
        },
      },
    ]);

    res.json({
      dailyUrls: dailyUrls[0] ? dailyUrls[0].count : 0,
      monthlyUrls: monthlyUrls[0] ? monthlyUrls[0].count : 0,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
