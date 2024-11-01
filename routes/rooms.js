const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

// Get all rooms
router.get('/', async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

// Create a new room
router.post('/', async (req, res) => {
  const room = new Room(req.body);
  await room.save();
  res.json(room);
});

// Tạo phòng mới
router.post('/', async (req, res) => {
    try {
      const room = new Room(req.body);
      await room.save();
      res.status(201).json(room);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  // Lấy danh sách phòng trống
router.get('/available', async (req, res) => {
    try {
      const rooms = await Room.find({ status: 'available' });
      res.json(rooms);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Cập nhật trạng thái phòng
router.patch('/:id', async (req, res) => {
    try {
      const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!room) return res.status(404).json({ message: 'Room not found' });
      res.json(room);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  

module.exports = router;
