import express from "express";
import jobController from "../controllers/jobController.js";


const router = express.Router();

router.route("/post").post(jobController.post);
router.route("/get").get(jobController.get);
router.route("/getadminjob").get(jobController.getAdminJob);
router.route("/get/:id").get(jobController.getJobId);

export default router;
