// Importing the Express module for routing functionality
import express from "express";

// Importing the jobController which contains the logic for handling job-related requests
import jobController from "../controllers/jobController.js";

// Creating an instance of an Express router to define routes for handling requests
const router = express.Router();

// Defining a POST route at "/post" that calls the "post" method from jobController
router.route("/post").post(jobController.post);

// Defining a GET route at "/get" that calls the "get" method from jobController to retrieve jobs
router.route("/get").get(jobController.get);

// Defining a GET route at "/getadminjob" that calls the "getAdminJob" method from jobController to retrieve admin-specific jobs
router.route("/getadminjob").get(jobController.getAdminJob);

// Defining a GET route at "/get/:id" where ":id" is a dynamic parameter to retrieve a specific job by its ID, calling the "getJobId" method from jobController
router.route("/get/:id").get(jobController.getJobId);

// Exporting the router instance to be used in other parts of the application (such as in the main server file)
export default router;
