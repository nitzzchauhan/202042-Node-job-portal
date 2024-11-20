import express from "express";

import companyController from "../controllers/companyController.js";




const router = express.Router();

router.route("/register").post(companyController.post);
router.route("/get").get(companyController.get);
router.route("/update/:id").put(companyController.getAdminJob);
router.route("/get/:id").get(companyController.getJobId);

export default router;
