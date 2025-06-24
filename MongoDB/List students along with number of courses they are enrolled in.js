//  List students along with number of courses they are enrolled in

db.students.aggregate([
  {
    $project: {
      name: 1,
      totalCourses: { $size: "$enrollments" }
    }
  }
]);
