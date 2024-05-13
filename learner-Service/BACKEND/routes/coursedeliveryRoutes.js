const express = require("express");
const {
    getCourseDeliveries,
    createDelivery,
    addStudent,
    addCourse,
    assignStudent,
    changeStatus,
    getTracking,
    getStudents,
    deleteDelivery,
    deleteStudent,
    editStudent,
    generateReport,
} = require("../controllers/courseDeliveryController");

const router = express.Router();
//method calls
router.post("/assignStudent", assignStudent);
router.get("/getCourseDeliveries", getCourseDeliveries);
router.route("/addDelivery", createDelivery);
router.post("/addStudent", addStudent);
router.post("/addCourse", addCourse);
router.post("/changeStatus", changeStatus);
router.post("/tracking", getTracking);
router.post("/deleteDelivery", deleteDelivery);
router.get("/getStudents", getStudents);
router.post("/deleteStudent", deleteStudent);
router.post("/editStudent", editStudent);
router.post("/generateReport", generateReport);

module.exports = router;
