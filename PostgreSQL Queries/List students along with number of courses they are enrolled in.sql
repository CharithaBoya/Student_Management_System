--List students along with number of courses they are enrolled in
SELECT student_id, COUNT(course_id) AS enrollment_count FROM enrollment GROUP BY student_id;
