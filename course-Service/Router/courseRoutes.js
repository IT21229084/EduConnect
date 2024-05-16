import express from "express";
const router = express.Router();
import {
  createCourse,
  updateCourse,
  deleteCourse,
  getCoursesByUser,
  approveCourse,
  getCourseByApproval,

} from "../Controller/courseController.js"
// import { restrictTo, authenticateRequest } from "../Controller/authController.js";


// router.route("/").post(restrictTo("instructor"), createCourse);

// router
//   .route("/:id")
//   .patch(restrictTo("instructor"), updateCourse)
//   .delete(restrictTo("instructor"), deleteCourse);

// router
//   .route("/course/user")
//   .get(restrictTo("instructor"), getCoursesByUser);

// router
//   .route("/course/:id")
//   .patch(restrictTo("admin"), approveCourse)
//   .get(restrictTo("admin"), getCourseByApproval)


router.route("/").post( createCourse);

router
  .route("/:id")
  .patch( updateCourse)
  .delete( deleteCourse);

router
  .route("/course/user/:id")
  .get( getCoursesByUser);

router
  .route("/course/:id")
  .patch( approveCourse)
  .get( getCourseByApproval)

export default router
