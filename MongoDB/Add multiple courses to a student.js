//  Add multiple courses to a student

db.students.updateOne(
  { student_id: 1 },
  {
    $push: {
      enrollments: {
        $each: [
          { course_id: 102, course_name: "OS" },
          { course_id: 103, course_name: "DBMS" }
        ]
      }
    }
  }
);
