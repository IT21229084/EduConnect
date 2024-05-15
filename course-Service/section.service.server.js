// module.exports = function (app) {

//   app.post('/api/course/:courseId/section', createSection);
//   app.delete('/api/section/:sectionId', deleteSection);
//   app.put('/api/section', updateSection);
//   app.get('/api/course/:courseId/section', findSectionsForCourse);
//   app.post('/api/section/:sectionId/enrollment', enrollStudentInSection);
//   app.delete('/api/section/:sectionId/enrollment', unEnrollStudentFromSection);
//   app.get('/api/student/section', findSectionsForStudent);

//   var sectionModel = require('../models/section/section.model.server');
//   var enrollmentModel = require('../models/enrollment/enrollment.model.server');

//   function findSectionsForStudent(req, res) {
//     var currentUser = req.session.currentUser;
//     var studentId = currentUser._id;
//     enrollmentModel
//       .findSectionsForStudent(studentId)
//       .then(function(enrollments) {
//         res.json(enrollments);
//       });
//   }

//   function enrollStudentInSection(req, res) {
//     var sectionId = req.params.sectionId;
//     var currentUser = req.session.currentUser;
//     var studentId = currentUser._id;
//     var enrollment = {
//       student: studentId,
//       section: sectionId
//     };

//     sectionModel
//       .decrementSectionSeats(sectionId)
//       .then(function () {
//         return enrollmentModel
//           .enrollStudentInSection(enrollment)
//       })
//       .then(function (enrollment) {
//         res.json(enrollment);
//       })
//   }

//   function unEnrollStudentFromSection (req, res){
//     var sectionId = req.params.sectionId;
//     var currentUser = req.session.currentUser;
//       var studentId = currentUser._id;
//       var enrollment = {
//           student: studentId,
//           section: sectionId
//       };

//     sectionModel
//         .incrementSectionSeats(sectionId)
//         .then(function () {
//           return enrollmentModel
//               .unEnrollStudentFromSection(enrollment)
//         })
//         .then(function (enrollment){
//           res.json(enrollment);
//         })
//   }

//   function findSectionsForCourse(req, res) {
//     var courseId = req.params['courseId'];
//     sectionModel
//       .findSectionsForCourse(courseId)
//       .then(function (sections) {
//         res.json(sections);
//       })
//   }

//   function updateSection(req, res) {
//       var section = req.body;
//       console.log(section.name + "@@@2")
//       console.log(section._id)
//       sectionModel.updateSection(section)
//           .then(function (section){
//               res.send(section);
//           })
//   }

//   function createSection(req, res) {
//     var section = req.body;
//     sectionModel
//       .createSection(section)
//       .then(function (section) {
//         res.json(section);
//       })
//   }

//   function deleteSection(req, res) {
//     var section = req.body;
//     var sectionId = req.params['sectionId'];

//     enrollmentModel
//       .deleteEnrollment(section, sectionId);

//     sectionModel
//       .deleteSection(section)
//       .then(function (section) {
//            res.json(section);
//       })
//   }
// };