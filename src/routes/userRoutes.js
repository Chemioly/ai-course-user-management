const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route: POST /api/users/register
// Description: Endpoint for registering a new user.
router.post('/register', userController.registerUser);

// Route: POST /api/users/login
// Description: Endpoint for user login and authentication.
router.post('/login', userController.loginUser);

// Route: PUT /api/users/:username
// Description: Endpoint for updating a user's profile.
// Parameters:
// - :username (String): The username of the user whose profile to update.
router.put('/:username', userController.updateUserProfile);

module.exports = router;

/**
 * Express Router: /api/users
 * Defines routes for user-related operations such as registration, login, and profile updates.
 *
 * Routes:
 * - POST /register: Registers a new user.
 * - POST /login: Authenticates user credentials for login.
 * - PUT /:username: Updates the profile of a specific user identified by :username.
 *
 * Controllers:
 * - These routes are handled by corresponding functions in the userController.
 * - See userController.js for detailed implementation of each route's functionality.
 *
 * Usage Example:
 * - Import this router in the main Express app to expose user-related endpoints.
 *
 * Notes:
 * - Ensure proper validation and error handling are implemented in userController.
 * - Secure endpoints that require authentication and authorization (e.g., login and profile update).
 */
