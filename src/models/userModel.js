const mongoose = require('mongoose');

// Define the user schema using Mongoose
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,   // Username is required
    unique: true,     // Username must be unique
  },
  password: {
    type: String,
    required: true,   // Password is required
  },
});

// Create a Mongoose model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;

/**
 * Mongoose Model: User
 * Represents a user entity in the application.
 *
 * Schema:
 * - username: String, required, unique
 * - password: String, required
 *
 * Methods Available:
 * - None directly provided; basic CRUD operations can be performed using Mongoose model methods.
 *
 * Usage Example:
 * - Import this model in other files to interact with the 'User' collection in MongoDB.
 *
 * Notes:
 * - Ensure MongoDB connection is established before using this model.
 * - Handle password hashing and other security measures outside of this model definition.
 */
