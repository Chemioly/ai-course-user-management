const mongoose = require('mongoose');
const User = require('../models/userModel'); // Importing the User model from its location
require('dotenv').config(); // Loading environment variables from .env file using dotenv

// Configuration variables loaded from environment variables in .env file
//CONFIG VARIABLES LOADED FROM ENV WITH dotenv in a .env file

// const MONGO_USERNAME = '';
// const MONGO_PASSWORD = '';
// const MONGO_HOST = '127.0.0.1';
// const MONGO_PORT = 27017;
// const MONGO_DBNAME = '';
// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`;

const url = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`;

/**
 * Connect to MongoDB using Mongoose
 * This function attempts to connect to the MongoDB server using the constructed URL.
 * If successful, it logs a success message to the console.
 * If there is an error during connection, it logs the error and exits the process with code 1.
 */
const connectDB = async () => {
  try {
    await mongoose.connect(url); // Connecting to MongoDB using Mongoose
    console.log('MongoDB connected'); // Logging successful connection message
  } catch (error) {
    console.error('MongoDB connection error:', error); // Logging connection error
    process.exit(1); // Exiting Node.js process with failure code 1
  }
};

module.exports = connectDB; // Exporting the connectDB function for external usage