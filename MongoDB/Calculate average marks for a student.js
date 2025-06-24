//  Calculate average marks for a student

db.students.aggregate([
  { $match: { student_id: 1 } },
  { $unwind: "$marks" },
  { $group: { _id: "$student_id", avgScore: { $avg: "$marks.score" } } }
]);
