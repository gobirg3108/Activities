const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const URL = mongoose.model('URL', URLSchema);

module.exports = URL;
