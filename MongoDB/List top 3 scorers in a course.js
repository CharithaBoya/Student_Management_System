//  List top 3 scorers in a course

db.students.aggregate([
  { $unwind: "$marks" },
  { $match: { "marks.course_id": 101 } },
  { $sort: { "marks.score": -1 } },
  { $limit: 3 },
  { $project: { name: 1, "marks.score": 1 } }
]);
