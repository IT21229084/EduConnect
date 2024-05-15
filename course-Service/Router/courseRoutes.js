import express from "express";
const router = express.Router();
const {
  createCourse,
  updateCourse,
  deleteCourse,
  getCoursesByUser,
  approveCourse,
  getCourseByApproval,

} = require("../controllers/courseController");
const authController = require("../controllers/authController");

router.route("/").post(authController.restrictTo("instructor"), createCourse);

router
  .route("/:id")
  .patch(authController.restrictTo("instructor"), updateCourse)
  .delete(authController.restrictTo("instructor"), deleteCourse);

router
  .route("/course/user")
  .get(authController.restrictTo("instructor"), getCoursesByUser);

router
  .route("/course/:id")
  .patch(authController.restrictTo("admin"), approveCourse)
  .get(authController.restrictTo("admin"), getCourseByApproval)
  
module.exports = router;
