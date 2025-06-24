//  Get all courses a student is enrolled in

db.students.findOne(
  { student_id: 1 },
  { _id: 0, enrollments: 1 }
);
