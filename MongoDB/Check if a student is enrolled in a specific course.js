// Check if a student is enrolled in a specific course

db.students.findOne({ student_id: 1, "enrollments.course_id": 101 });
