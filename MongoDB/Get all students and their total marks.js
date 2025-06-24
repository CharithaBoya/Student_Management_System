//  Get all students and their total marks

db.students.aggregate([
  { $unwind: "$marks" },
  { $group: { _id: "$name", total: { $sum: "$marks.score" } } }
]);
