const express = require('express');
const router = express.Router();
const Passenger = require('../models/Passenger');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    const existingUser = await Passenger.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newPassenger = new Passenger({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    await newPassenger.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Passenger.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user: { id: user._id, name: user.name } });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
