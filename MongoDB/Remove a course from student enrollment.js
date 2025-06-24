//  Remove a course from student enrollment

db.students.updateOne(
  { student_id: 1 },
  { $pull: { enrollments: { course_id: 101 } } }
);
