const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  name: String,
  address: String,
  amenities: [String],
  description: String,
});

module.exports = mongoose.model('Hotel', HotelSchema);
