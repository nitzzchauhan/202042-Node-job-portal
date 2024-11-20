// Import the required modules
import express from 'express'; // Express is a web framework for Node.js
import UserController from '../controllers/userControllers.js'; // Import the UserController, which handles user-related actions

// Create a new instance of an Express router
const router = express.Router();

// Route to handle user registration
// When a POST request is made to "/register", the 'register' method from UserController is invoked
router.route("/register").post(UserController.register);

// Route to handle user login
// When a POST request is made to "/login", the 'login' method from UserController is invoked
router.route("/login").post(UserController.login);

// Route to handle user logout
// When a GET request is made to "/logout", the 'logout' method from UserController is invoked
// Typically, logout would clear the user session or token
router.route("/logout").get(UserController.logout);

// Route to handle profile update
// When a POST request is made to "/profile/update", the 'updateProfile' method from UserController is invoked
// This could be used to update user details like name, email, or password
router.route("/profile/update").post(UserController.updateProfile);

// Export the router to be used in other parts of the application (e.g., in a main app file)
export default router;
