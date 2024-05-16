import Course from '../Model/courseModel.js';


export const createCourse = async (req, res, next) => {
    const {
        title,
        description,
        instructor,
        duration,
        Image,
        price,
        // tags,
        // createdBy,
        lessons,
    } = req.body;

    const existingCourse = await Course.findOne({ title: title });
    if (existingCourse) {
        return ("Course exists!");
    }

    const newCourse = new Course({
        title,
        description,
        instructor,
        duration,
        Image,
        price,
        // tags,
        // createdBy: req.user.userId,
        lessons,
    });

    const savedCourse = await newCourse.save();
    res.status(201).json({
        data: savedCourse,
        message: "Course has been Created",
    });
}

export const getAllCourses = async (req, res, next) => {
    const courses = await Course.find();
    res.status(200).json({
        status: "success",
        data: courses,
    });
}

export const getCoursesByUser = async (req, res, next) => {
    const courses = await Course.find({ createdBy: req.user.userId });
    res.status(200).json({
        status: "success",
        data: courses,
    });
}

export const getOneCourse = async (req, res, next) => {
    const courseId = req.params.id;
    const course = await Course.findOne({ _id: courseId });

    if (!course) {
        return next(new AppError("Course Not Found!", 404));
    }
    res.status(201).json({
        status: "success",
        course,
    });
}

export const updateCourse = async (req, res, next) => {
    const courseId = req.params.id;
    console.log(courseId);
    const updatedDetails = req.body;
    console.log(updatedDetails);

    const course = await Course.findOneAndUpdate(
        { _id: courseId }, // Filter criteria
        { $set: updatedDetails }, // Update data using $set operator
        { new: true } // Return the updated document
    );

    if (!course) {
        return next(new AppError("Course Not Found!", 404));
    }
    res.status(201).json({
        status: "success",
        data: {
            course,
        },
    });
}

export const deleteCourse = async (req, res, next) => {
    const courseId = req.params.id;
    const course = await Course.findOneAndDelete({ _id: courseId });

    if (!course) {
        return next(new AppError("Course Not Found!", 404));
    }
    res.status(204).end();
}

export const approveCourse = async (req, res, next) => {
    const courseId = req.params.id
    const updateBody = {
        authorized: req.body.authorized
    }
    const response = await Course.findByIdAndUpdate(courseId, updateBody)
    if (!response) {
        return next(new AppError("Course Not Approved correctly!", 500));
    }
    res.status(201).end();
}

export const getCourseByApproval = async (req, res, next) => {

    const approvedState = req.params.id
    const coursesList = await Course.find({ authorized: approvedState })

    if (coursesList.length < 1) {
        return next(new AppError("No pending courses!", 404));
    }
    res.status(201).json(coursesList);
}

