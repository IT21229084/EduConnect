import express from "express";
const router = express.Router();
const {
  createEnrollment,
  getAllEnrollments,
  getEnrollmentById,
  updateEnrollmentById,
  deleteEnrollmentById,
  getAllEnrollmentsByInstructor,
} = require("../controllers/enrollmentController");
const authController = require("../controllers/authController");

router
  .route("/")
  .post(createEnrollment)
  .get(authController.restrictTo("admin", "instructor"), getAllEnrollments);
router
  .route("/:id")
  .get(authController.restrictTo("learner"), getEnrollmentById)
  .patch(authController.restrictTo("learner"), updateEnrollmentById)
  .delete(authController.restrictTo("learner"), deleteEnrollmentById);

module.exports = router;
