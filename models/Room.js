const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
    required: true,
  },
  type: String,
  price: Number,
  status: {
    type: String,
    enum: ['available', 'booked'],
    default: 'available',
  },
});

module.exports = mongoose.model('Room', RoomSchema);
