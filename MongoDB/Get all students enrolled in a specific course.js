//  Get all students enrolled in a specific course

db.students.find({ "enrollments.course_id": 101 });
