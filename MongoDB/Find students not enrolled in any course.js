//  Find students not enrolled in any course

db.students.find({ enrollments: { $exists: true, $size: 0 } });
