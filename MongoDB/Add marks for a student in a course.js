db.students.updateOne(
  { student_id: 1 },
  {
    $push: {
      marks: {
        course_id: 101,
        score: 92
      }
    }
  }
);
