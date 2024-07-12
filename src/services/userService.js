const User = require('../models/userModel');

/**
 * Creates a new user in the database.
 * @param {Object} userData - The user data to create a new user.
 * @returns {Promise<User>} The newly created user object.
 */
exports.createUser = async (userData) => {
  const newUser = new User(userData);
  await newUser.save();
  return newUser;
};

// Add more service functions for user operations

/**
 * User Service Functions
 *
 * Functions:
 * - createUser(userData): Creates a new user in the database.
 *   - @param {Object} userData - The user data to create a new user.
 *   - @returns {Promise<User>} The newly created user object.
 *
 * Additional Functions:
 * - Add more functions here for other user operations such as fetching users,
 *   updating user information, deleting users, etc.
 *
 * Notes:
 * - Ensure each function handles errors gracefully and validates input data.
 * - Implement business logic specific to user operations as needed.
 * - Utilize the User model (imported from userModel) to interact with the database.
 */
