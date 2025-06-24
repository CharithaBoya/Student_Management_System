//  Update a student’s phone number

db.students.updateOne(
  { student_id: 1 },
  { $set: { phone: "9123456780" } }
);
