const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const mentorRoutes = require('./routes/mentor');
const studentRoutes = require('./routes/student');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/mentors', mentorRoutes);
app.use('/api/students', studentRoutes);

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(error => {
  console.log('Database connection error:', error);
});
