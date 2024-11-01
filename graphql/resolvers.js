const Hotel = require('../models/Hotel');
const Room = require('../models/Room');
const Booking = require('../models/Booking');
const User = require('../models/User');

const resolvers = {
  Query: {
    hotels: async () => await Hotel.find(),
    rooms: async (_, { available }) => {
      if (available === true) {
        return await Room.find({ status: 'available' });
      }
      return await Room.find();
    },
    bookings: async () => await Booking.find().populate('user').populate('room'),
    users: async () => await User.find(),
  },
  
  Mutation: {
    createBooking: async (_, { userId, roomId, checkInDate, checkOutDate }) => {
      const booking = new Booking({
        user: userId,
        room: roomId,
        checkInDate,
        checkOutDate,
      });
      await booking.save();
      await Room.findByIdAndUpdate(roomId, { status: 'booked' });
      return booking.populate('user').populate('room');
    },
  },
};

module.exports = resolvers;
