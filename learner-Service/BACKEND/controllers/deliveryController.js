// const DeliveryModel = require("../models/deliveryModel");
// const Student = require("../models/studentModels");
// const Course = require("../models/courseModel");
// const _ = require("lodash");
// const crypto = require("crypto");
// const util = require("util");
// const json2csv = require("json2csv").parse;
// let path = require("path");
// let fs = require("fs");

// const randomBytes = util.promisify(crypto.randomBytes);

// exports.getDeliveries = async (req, res, next) => {
//   try {
//     const deliveries = await DeliveryModel.find()
//       .populate({
//         path: "courseId",
//         select: "name _id price",
//       })
//       .sort({ updatedAt: -1 });
//     let deliveryList = [];
//     deliveries.map((delivery) => {
//       let data = {
//         deliveryId: delivery._id,
//         studentId: delivery.studentId,
//         trackingId: delivery.trackingId,
//         status: delivery.inprogress
//           ? "In Progress"
//           : delivery.completed
//           ? "Completed"
//           : "Enrolled",
//         courseName: delivery.courseId.name,
//       };
//       deliveryList.push(data);
//     });
//     res.status(200).json({
//       success: true,
//       message: "list fetched successfully",
//       data: deliveryList,
//     });
//   } catch (error) {
//     // res.status(500).json({
//     //   success: true,
//     //   message: error,
//     // });
//     console.log(error);
//   }
// };


// exports.addStudent = async (req, res, next) => {
//   try {
//     const data = req.body;

//     const newStudent = new Student({
//       name: data.name,
//       email: data.email,
//       phoneNumber: data.phone,
//     });

//     const savedStudent = await newStudent.save();

//     res.status(201).json({
//       success: true,
//     });
//   } catch (error) {}
// };

// exports.addCourse = async (req, res, next) => {
//   try {
//     const data = req.body;

//     const newCourse = new Course({
//       name: data.name,
//       price: data.price,
//     });

//     const savedCourse = await newCourse.save();

//     const rawBytes = await randomBytes(12);
//     const trackingId = rawBytes.toString("hex");

//     const newDelivery = new DeliveryModel({
//       courseId: savedCourse._id,
//       trackingId: trackingId,
//     });

//     const savedDelivery = await newDelivery.save();

//     res.status(201).json({
//       success: true,
//       data: { course: savedCourse, delivery: savedDelivery },
//     });
//   } catch (error) {}
// };

// exports.assignStudent = async (req, res, next) => {
//   try {
//     const data = req.body;
//     const delivery = await DeliveryModel.find({ _id: data.deliveryId });

//     if (_.isEmpty(delivery)) {
//       return res.status(202).json({
//         success: false,
//         message: "Course Delivery does not exists",
//       });
//     }

//     const student = await Student.find({ _id: data.studentId });

//     if (_.isEmpty(student)) {
//       return res.status(202).json({
//         success: false,
//         message: "Student does not exists",
//       });
//     }

//     const updatedDelivery = await DeliveryModel.findByIdAndUpdate(
//       data.deliveryId,
//       { studentId: data.studentName }
//     );

//     if (!_.isEmpty(updatedDelivery)) {
//       return res.status(200).json({
//         success: true,
//         data: updatedDelivery,
//       });
//     }

//     res.status(202).json({
//       success: false,
//       message: "Student did not assigned",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.changeStatus = async (req, res, next) => {
//   try {
//     const data = req.body;
//     const delivery = await DeliveryModel.find({ _id: data.deliveryId });

//     if (_.isEmpty(delivery)) {
//       return res.status(202).json({
//         success: false,
//         message: "Course Delivery does not exists",
//       });
//     }

//     let updateData = {
//       Enrolled: data.status.enrolled ? true : false,
//       InProgress: data.status.inprogress ? true : false,
//       Completed: data.status.completed ? true : false,
//       startDate: data.status.inprogress ? new Date() : null,
//       completedDate: data.status.completed ? new Date() : null,
//     };

//     const updatedDelivery = await DeliveryModel.findByIdAndUpdate(
//       data.deliveryId,
//       updateData
//     );

//     if (!_.isEmpty(updatedDelivery)) {
//       return res.status(200).json({
//         success: true,
//         data: updatedDelivery,
//       });
//     }

//     res.status(202).json({
//       success: false,
//       message: "status not updated",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.getTracking = async (req, res, next) => {
//   try {
//     const data = req.body;
//     const delivery = await DeliveryModel.find({
//       trackingId: data.trackingId,
//     })
//       .populate({
//         path: "courseId",
//         select: "name _id price",
//       })
//       .select({
//         __v: 0,
//       });

//     if (_.isEmpty(delivery)) {
//       return res.status(202).json({
//         success: false,
//         message: "Tracking Id does not exists",
//       });
//     }

//     res.status(201).json({
//       success: true,
//       data: delivery[0],
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.deleteDelivery = async (req, res, next) => {
//   try {
//     const data = req.body;
//     const delivery = await DeliveryModel.find({ _id: data.deliveryId });

//     if (_.isEmpty(delivery)) {
//       return res.status(202).json({
//         success: false,
//         message: "Course Delivery does not exists",
//       });
//     }

//     let updateData = {
//       isDeleted: true,
//     };

//     const updatedDelivery = await DeliveryModel.deleteOne({
//       _id: data.deliveryId,
//     });

//     if (!_.isEmpty(updatedDelivery)) {
//       return res.status(200).json({
//         success: true,
//         data: updatedDelivery,
//       });
//     }

//     res.status(202).json({
//       success: false,
//       message: "Course delivery is not deleted",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.deleteStudent = async (req, res, next) => {
//   try {
//     const data = req.body;
//     const delivery = await Student.find({ _id: data.studentId });

//     if (_.isEmpty(delivery)) {
//       return res.status(202).json({
//         success: false,
//         message: "Student does not exists",
//       });
//     }

//     const updatedStudent = await Student.deleteOne({
//       _id: data.studentId,
//     });

//     if (!_.isEmpty(updatedStudent)) {
//       return res.status(200).json({
//         success: true,
//         data: updatedStudent,
//       });
//     }

//     res.status(202).json({
//       success: false,
//       message: "Student is not deleted",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.getStudents = async (req, res, next) => {
//   try {
//     const students = await Student.find().sort({ updatedAt: -1 });

//     res.status(200).json({
//       success: true,
//       message: "list fetched successfully",
//       data: students,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.editStudent = async (req, res, next) => {
//   try {
//     const data = req.body;

//     const student = await Student.find({ _id: data.studentId });

//     if (_.isEmpty(student)) {
//       return res.status(202).json({
//         success: false,
//         message: "Student does not exists",
//       });
//     }

//     const updatedStudent = await Student.findByIdAndUpdate(data.studentId, {
//       name: data.name,
//       email: data.email,
//       phoneNumber: data.phone,
//     });

//     if (!_.isEmpty(updatedStudent)) {
//       return res.status(200).json({
//         success: true,
//         data: updatedStudent,
//       });
//     }

//     res.status(202).json({
//       success: false,
//       message: "Student did not updated",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.generateReport = async (req, res, next) => {
//   try {
//     const deliveries = await DeliveryModel.find()
//       .populate({
//         path: "courseId",
//         select: "name _id price",
//       })
//       .sort({ updatedAt: -1 });
//     let deliveryList = [];
//     deliveries.map((delivery) => {
//       let data = {
//         deliveryId: delivery._id,
//         studentId: delivery.studentId,
//         trackingId: delivery.trackingId,
//         status: delivery.inprogress
//           ? "In Progress"
//           : delivery.completed
//           ? "Completed"
//           : "Enrolled",
//         courseName: delivery.courseId.name,
//       };
//       deliveryList.push(data);
//     });

//     const file = await convertJsonToCsv(deliveryList, ["CourseName", "status"]);

//     if (!_.isEmpty(file)) {
//       return res.status(200).json({
//         success: true,
//         data: file,
//       });
//     }

//     res.status(202).json({
//       success: false,
//       message: "report generation unsucessfull",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const convertJsonToCsv = (data, columns) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       console.log(data);
//       let ext = ".csv";
//       const fileName = "Course-delivery-report-";
//       const csv = json2csv(data, { fields: columns });
//       var flname = fileName + Date.now().toString() + ext;
//       var loc = path.join(__dirname, "..", "public", flname);
//       let csvFolderPath = path.join(__dirname, "..", "public");
//       if (!fs.existsSync(csvFolderPath)) {
//         fs.mkdirSync(csvFolderPath, { recursive: true });
//       }
//       fs.writeFile(loc, csv, (err, result) => {
//         if (err) {
//           return reject(err);
//         } else {
//           let csvFile = path.join("public", flname);
//           return resolve("http://localhost:5050/public" + "/" + flname);
//         }
//       });
//     } catch (err) {
//       console.error(err);
//       return reject(err);
//     }
//   });
// };



const DeliveryModel = require("../models/deliveryModel");
const Student = require("../models/studentModels");
const Course = require("../models/courseModel");
const _ = require("lodash");
const crypto = require("crypto");
const util = require("util");
const json2csv = require("json2csv").parse;
const path = require("path");
const fs = require("fs");

const randomBytes = util.promisify(crypto.randomBytes);

exports.getDeliveries = async (req, res, next) => {
  try {
    const deliveries = await DeliveryModel.find()
      .populate({
        path: "courseId",
        select: "name _id price",
      })
      .sort({ updatedAt: -1 });
    let deliveryList = deliveries.map((delivery) => ({
      deliveryId: delivery._id,
      studentId: delivery.studentId,
      trackingId: delivery.trackingId,
      status: delivery.inprogress
        ? "In Progress"
        : delivery.completed
        ? "Completed"
        : "Enrolled",
      courseName: delivery.courseId.name,
    }));
    res.status(200).json({
      success: true,
      message: "List fetched successfully",
      data: deliveryList,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.createDelivery = async (req, res, next) => {
  try {
    const data = req.body;

    const newCourse = new Course({
      name: data.name,
      price: data.price,
    });

    const savedCourse = await newCourse.save();

    const rawBytes = await randomBytes(12);
    const trackingId = rawBytes.toString("hex");

    const newDelivery = new DeliveryModel({
      courseId: savedCourse._id,
      trackingId: trackingId,
    });

    const savedDelivery = await newDelivery.save();

    res.status(201).json({
      success: true,
      message: "Course and delivery created successfully",
      data: { course: savedCourse, delivery: savedDelivery },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.addStudent = async (req, res, next) => {
  try {
    const data = req.body;
    const newStudent = new Student({
      name: data.name,
      email: data.email,
      phoneNumber: data.phone,
    });
    const savedStudent = await newStudent.save();
    res.status(201).json({
      success: true,
      message: "Student added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.addCourse = async (req, res, next) => {
  try {
    const data = req.body;
    const newCourse = new Course({
      name: data.name,
      price: data.price,
    });
    const savedCourse = await newCourse.save();
    const rawBytes = await randomBytes(12);
    const trackingId = rawBytes.toString("hex");
    const newDelivery = new DeliveryModel({
      courseId: savedCourse._id,
      trackingId: trackingId,
    });
    const savedDelivery = await newDelivery.save();
    res.status(201).json({
      success: true,
      message: "Course and delivery added successfully",
      data: { course: savedCourse, delivery: savedDelivery },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.assignStudent = async (req, res, next) => {
  try {
    const data = req.body;
    const delivery = await DeliveryModel.findById(data.deliveryId);
    if (!delivery) {
      return res.status(404).json({
        success: false,
        message: "Course Delivery does not exist",
      });
    }
    const student = await Student.findById(data.studentId);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student does not exist",
      });
    }
    delivery.studentId = data.studentId;
    await delivery.save();
    res.status(200).json({
      success: true,
      message: "Student assigned successfully",
      data: delivery,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.changeStatus = async (req, res, next) => {
  try {
    const data = req.body;
    const delivery = await DeliveryModel.findById(data.deliveryId);
    if (!delivery) {
      return res.status(404).json({
        success: false,
        message: "Course Delivery does not exist",
      });
    }
    delivery.inprogress = data.status.inprogress;
    delivery.completed = data.status.completed;
    if (data.status.inprogress) {
      delivery.startDate = new Date();
    }
    if (data.status.completed) {
      delivery.completedDate = new Date();
    }
    await delivery.save();
    res.status(200).json({
      success: true,
      message: "Delivery status updated successfully",
      data: delivery,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.getTracking = async (req, res, next) => {
  try {
    const data = req.body;
    const delivery = await DeliveryModel.findOne({
      trackingId: data.trackingId,
    }).populate({
      path: "courseId",
      select: "name _id price",
    });
    if (!delivery) {
      return res.status(404).json({
        success: false,
        message: "Tracking ID does not exist",
      });
    }
    res.status(200).json({
      success: true,
      message: "Delivery found",
      data: delivery,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.deleteDelivery = async (req, res, next) => {
  try {
    const data = req.body;
    const delivery = await DeliveryModel.findById(data.deliveryId);
    if (!delivery) {
      return res.status(404).json({
        success: false,
        message: "Course Delivery does not exist",
      });
    }
    await delivery.remove();
    res.status(200).json({
      success: true,
      message: "Delivery deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.deleteStudent = async (req, res, next) => {
  try {
    const data = req.body;
    const student = await Student.findById(data.studentId);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student does not exist",
      });
    }
    await Student.deleteOne({ _id: data.studentId }); // Use deleteOne to delete the student
    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


exports.getStudents = async (req, res, next) => {
  try {
    const students = await Student.find().sort({ updatedAt: -1 });
    res.status(200).json({
      success: true,
      message: "Students fetched successfully",
      data: students,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.editStudent = async (req, res, next) => {
  try {
    const data = req.body;
    const student = await Student.findById(data.studentId);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student does not exist",
      });
    }
    student.name = data.name;
    student.email = data.email;
    student.phoneNumber = data.phone;
    await student.save();
    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.generateReport = async (req, res, next) => {
  try {
    const deliveries = await DeliveryModel.find()
      .populate({
        path: "courseId",
        select: "name _id price",
      })
      .sort({ updatedAt: -1 });
    const deliveryList = deliveries.map((delivery) => ({
      deliveryId: delivery._id,
      studentId: delivery.studentId,
      trackingId: delivery.trackingId,
      status: delivery.inprogress
        ? "In Progress"
        : delivery.completed
        ? "Completed"
        : "Enrolled",
      courseName: delivery.courseId.name,
    }));

    const file = await convertJsonToCsv(deliveryList, ["courseName", "status"]);
    if (file) {
      res.status(200).json({
        success: true,
        message: "Report generated successfully",
        data: file,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Report generation unsuccessful",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const convertJsonToCsv = (data, columns) => {
  return new Promise((resolve, reject) => {
    try {
      const ext = ".csv";
      const fileName = "Course-delivery-report-";
      const csv = json2csv(data, { fields: columns });
      const flname = fileName + Date.now().toString() + ext;
      const loc = path.join(__dirname, "..", "public", flname);
      const csvFolderPath = path.join(__dirname, "..", "public");
      if (!fs.existsSync(csvFolderPath)) {
        fs.mkdirSync(csvFolderPath, { recursive: true });
      }
      fs.writeFile(loc, csv, (err) => {
        if (err) {
          reject(err);
        } else {
          const csvFile = path.join("public", flname);
          resolve("http://localhost:5050/public" + "/" + flname);
        }
      });
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};
