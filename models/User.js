const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactInfo: String,
});

module.exports = mongoose.model('User', UserSchema);
