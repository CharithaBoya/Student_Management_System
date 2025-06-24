//  Get marks for a specific student in a specific course

db.students.findOne(
  { student_id: 1, "marks.course_id": 101 },
  { _id: 0, "marks.$": 1 }
);
