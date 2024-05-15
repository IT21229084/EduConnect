import Course from '../models/courseModel';
import Enrollment from '../models/enrollmentModel';

const createEnrollment = catchAsync(async (req, res, next) => {
    const { courseId, userId } = req.body;
    console.log("hello");
    const existingEnrollment = await Enrollment.findOne({
      courseId: courseId,
      learnerId: userId,
    });
    if (existingEnrollment) {
      return next(new AppError("Already enrolled!", 400));
    }
  
    const course = await Course.findOne({ _id: courseId });
    if (!course) {
      return next(new AppError("Course not found", 404));
    }
  
    const newEnrollment = new Enrollment({
      courseId,
      instructorId: course.createdBy,
      learnerId: userId,
      paymentStatus: true,
    });
  
    const savedEnrollment = await newEnrollment.save();
    if (savedEnrollment) {
      const userResponse = await axios.get(
        `http://user:8006/common/user/${userId}`
      );
      const email = userResponse.data.email;
      const response = await axios.post("http://notification:8004/send-email", {
        email: email,
        subject: `Course Enrollment - ${course.title}`,
        text: `Congratulations! You have successfully Enrolled to ${course.title}! You will received a payment Confirmation Message shortly.`,
      });
    }
  
    res.status(201).json({
      data: savedEnrollment,
      message: "Enrolled",
    });
  });
  
  // Get all enrollments
  const getAllEnrollments = catchAsync(async (req, res, next) => {
    const enrollments = await Enrollment.find();
    res.status(200).json({
      data: enrollments,
    });
  });
  //get courses enrolled related to instructor
  const getAllEnrollmentsByInstructor = catchAsync(async (req, res, next) => {
    const instructorId = req.user.userId;
    console.log(req.user.userId);
    console.log("hello");
    const enrollments = await Enrollment.find({ instructorId: instructorId });
    console.log(enrollments);
    res.status(200).json({
      data: enrollments,
    });
  });
  
  // Get a single enrollment by ID
  const getEnrollmentById = catchAsync(async (req, res, next) => {
    const enrollment = await Enrollment.find({ learnerId: req.params.id });
    if (!enrollment) {
      return next(new AppError("Enrollment not found", 404));
    }
    res.status(200).json({
      data: enrollment,
    });
  });
  
  // Update an enrollment by ID
  const updateEnrollmentById = catchAsync(async (req, res, next) => {
    const userId = req.params.userId;
    const courseId = req.params.id;
    const enrollment = await Enrollment.findOne({
      courseId: courseId,
      learnerId: userId,
    });
    console.log(enrollment);
    const updatedEnrollment = await Enrollment.findByIdAndUpdate(
      enrollment._id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedEnrollment) {
      return next(new AppError("Enrollment not found", 404));
    }
    res.status(200).json({
      data: updatedEnrollment,
      message: "Enrollment updated successfully",
    });
  });
  // Delete an enrollment by ID
  const deleteEnrollmentById = catchAsync(async (req, res, next) => {
    const userId = req.user.userId;
    const courseId = req.params.id;
    console.log(userId);
    console.log(courseId);
    const enrollment = await Enrollment.findOne({
      courseId: courseId,
      learnerId: userId,
    });
    const deletedEnrollment = await Enrollment.findByIdAndDelete(enrollment._id);
    if (!deletedEnrollment) {
      return next(new AppError("Enrollment not found", 404));
    }
    res.status(204).json({
      data: null,
      message: "Enrollment deleted successfully",
    });
  });
  