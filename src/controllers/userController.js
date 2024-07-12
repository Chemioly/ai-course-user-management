const User = require('../models/userModel'); // Importing the User model from its location
const bcrypt = require('bcrypt'); // Importing bcrypt for password hashing
const jwt = require('jsonwebtoken'); // Importing jsonwebtoken for generating JWTs

// User registration
exports.registerUser = async (req, res) => {
  try {
    const { username, password } = req.body; // Extracting username and password from request body

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with hashed password
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save(); // Saving the new user to the database

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// User login
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body; // Extracting username and password from request body

    // Check if the username exists
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate a JSON Web Token (JWT) for authenticated user
    const token = jwt.sign({ username: existingUser.username }, 'your-secret-key', { expiresIn: '1h' });

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// User profile management
exports.updateUserProfile = async (req, res) => {
  try {
    const { username } = req.params; // Extracting username from request parameters
    const { newUsername } = req.body; // Extracting newUsername from request body

    // Update the user's username
    await User.updateOne({ username }, { username: newUsername });

    return res.status(200).json({ message: 'User profile updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};
