const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Replace with your actual secret key

/**
 * Middleware function to authenticate user using JWT token.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Object} JSON response indicating authorization status
 */
exports.authenticateUser = (req, res, next) => {
  const token = req.header('Authorization'); // Get the token from request header

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify the token and decode the payload
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded.user; // Attach decoded user information to request object
    next(); // Proceed to the next middleware
  } catch (err) {
    // Handle invalid token error
    res.status(401).json({ message: 'Invalid token' });
  }
};
