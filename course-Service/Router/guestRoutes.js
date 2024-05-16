import express from "express";
const router = express.Router();
import {
  getAllCourses,
  getOneCourse,
} from "../Controller/courseController.js"

router.route("/").get(getAllCourses);
router.route("/:id").get(getOneCourse);
export default router
