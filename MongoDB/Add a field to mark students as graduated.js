//  Add a field to mark students as graduated

db.students.updateMany({}, { $set: { graduated: false } });
