--Count number of students per course
SELECT course_id, COUNT(student_id) AS student_count FROM enrollment GROUP BY course_id;
