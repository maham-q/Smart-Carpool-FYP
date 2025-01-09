const express = require('express');
const { connect } = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); 
const passengerRoutes = require('./routes/passengerRoutes');

dotenv.config();

const app = express();

app.use(cors()); 
app.use(express.json());

connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/passenger', passengerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
