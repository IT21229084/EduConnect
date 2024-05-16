import Course from '../Model/courseModel.js';
import Enrollment from '../Model/enrollmentModel.js';

export const createEnrollment = async (req, res, next) => {
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
      `http://localhost:8000/auth/${userId}`
    );
    const email = userResponse.data.email;
    const response = await axios.post("http://localhost:8000/notification/email", {
      email: email,
      subject: `Course Enrollment - ${course.title}`,
      text: `Congratulations! You have successfully Enrolled to ${course.title}! You will received a payment Confirmation Message shortly.`,
    });
  }

  res.status(201).json({
    data: savedEnrollment,
    message: "Enrolled",
  });
}

// Get all enrollments
export const getAllEnrollments = async (req, res, next) => {
  const enrollments = await Enrollment.find();
  res.status(200).json({
    data: enrollments,
  });
}
//get courses enrolled related to instructor
export const getAllEnrollmentsByInstructor = async (req, res, next) => {
  const instructorId = req.user.userId;
  console.log(req.user.userId);
  console.log("hello");
  const enrollments = await Enrollment.find({ instructorId: instructorId });
  console.log(enrollments);
  res.status(200).json({
    data: enrollments,
  });
}

// Get a single enrollment by ID
export const getEnrollmentById = async (req, res, next) => {
  const enrollment = await Enrollment.find({ learnerId: req.params.id });
  if (!enrollment) {
    return next(new AppError("Enrollment not found", 404));
  }
  res.status(200).json({
    data: enrollment,
  });
}

// Update an enrollment by ID
export const updateEnrollmentById = async (req, res, next) => {
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
}
// Delete an enrollment by ID
export const deleteEnrollmentById = async (req, res, next) => {
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
}
