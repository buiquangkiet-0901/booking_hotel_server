const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Get all bookings
router.get('/', async (req, res) => {
  const bookings = await Booking.find().populate('userId roomId');
  res.json(bookings);
});

// Create a new booking
router.post('/', async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.json(booking);
});

// Cập nhật thông tin đặt phòng
router.patch('/:id', async (req, res) => {
    try {
      const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!booking) return res.status(404).json({ message: 'Booking not found' });
      res.json(booking);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  // Xóa đơn đặt phòng qua ID
router.delete('/:id', async (req, res) => {
    try {
      const booking = await Booking.findByIdAndDelete(req.params.id);
      if (!booking) return res.status(404).json({ message: 'Booking not found' });
      res.json({ message: 'Booking deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;
