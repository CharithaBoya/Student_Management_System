//  Update student address city

db.students.updateOne(
  { student_id: 1 },
  { $set: { "address.city": "Bangalore" } }
);
