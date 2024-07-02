const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Import routes
const mentorRoutes = require('./routes/mentor.routes');
const studentRoutes = require('./routes/student.routes');

// Register routes
app.use('/api/mentors', mentorRoutes);
app.use('/api/students', studentRoutes);
