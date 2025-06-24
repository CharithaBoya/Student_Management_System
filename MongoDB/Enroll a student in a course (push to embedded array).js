// Enroll a student in a course (push to embedded array)

db.students.updateOne(
  { student_id: 1 },
  {
    $push: {
      enrollments: {
        course_id: 101,
        course_name: "Computer Networks"
      }
    }
  }
);
