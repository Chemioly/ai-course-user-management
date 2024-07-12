const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Start the server
const port = 3000;

/**
 * Index.js - Express Server Setup
 *
 * Overview:
 * - Sets up an Express application with MongoDB connection and user routes.
 *
 * Steps:
 * 1. Connects to MongoDB using the connectDB function from './config/database'.
 * 2. Configures middleware to parse JSON requests.
 * 3. Sets up routes for user-related endpoints using './routes/userRoutes'.
 * 4. Starts the server on port 3000 and logs a message upon successful start.
 *
 * Notes:
 * - Ensure MongoDB is running and accessible before starting the server.
 * - Adjust the 'port' variable to match the desired server port.
 * - Customize middleware and route configurations based on application requirements.
 */

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
