//  Delete marks for a specific course

db.students.updateMany(
  {},
  { $pull: { marks: { course_id: 101 } } }
);
