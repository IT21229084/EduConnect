import express from "express";
const router = express.Router();
import {
  createEnrollment,
  getAllEnrollments,
  getEnrollmentById,
  updateEnrollmentById,
  deleteEnrollmentById,
  getAllEnrollmentsByInstructor,
} from "../controller/enrollmentController.js"
// import { restrictTo, authenticateRequest } from "../Controller/authController.js";

// router
//   .route("/")
//   .post(createEnrollment)
//   .get(restrictTo("admin", "instructor"), getAllEnrollments);
// router
//   .route("/:id")
//   .get(restrictTo("learner"), getEnrollmentById)
//   .patch(restrictTo("learner"), updateEnrollmentById)
//   .delete(restrictTo("learner"), deleteEnrollmentById);

router
  .route("/")
  .post(createEnrollment)
  .get(getAllEnrollments);
router
  .route("/:id")
  .get(getEnrollmentById)
  .patch(updateEnrollmentById)
  .delete(deleteEnrollmentById);

export default router
