const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetToken: { type: String },
  resetCode: { type: Number },
  tokenExpiry: { type: Date },
}, { timestamps: true });

const Passenger = mongoose.model('Passenger', passengerSchema, 'passengers');

module.exports = Passenger;
