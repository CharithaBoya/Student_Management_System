//  Count number of students per course

db.students.aggregate([
  { $unwind: "$enrollments" },
  { $group: { _id: "$enrollments.course_id", count: { $sum: 1 } } }
]);
