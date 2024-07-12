const User = require('../models/userModel');

exports.createUser = async (userData) => {
  const newUser = new User(userData);
  await newUser.save();
  return newUser;
};

// Add more service functions for user operations