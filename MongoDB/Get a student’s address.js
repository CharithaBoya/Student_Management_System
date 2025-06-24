// Get a student’s address

db.students.findOne(
  { student_id: 1 },
  { _id: 0, address: 1 }
);
