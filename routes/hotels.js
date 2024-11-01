const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

// Get all hotels
router.get('/', async (req, res) => {
  const hotels = await Hotel.find();
  res.json(hotels);
});

// Create a new hotel
router.post('/', async (req, res) => {
  const hotel = new Hotel(req.body);
  await hotel.save();
  res.json(hotel);
});

// Tạo khách sạn mới
router.post('/', async (req, res) => {
    try {
      const hotel = new Hotel(req.body);
      await hotel.save();
      res.status(201).json(hotel);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  // Lấy danh sách tất cả khách sạn
router.get('/', async (req, res) => {
    try {
      const hotels = await Hotel.find();
      res.json(hotels);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Xóa khách sạn qua ID
router.delete('/:id', async (req, res) => {
    try {
      const hotel = await Hotel.findByIdAndDelete(req.params.id);
      if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
      res.json({ message: 'Hotel deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;
