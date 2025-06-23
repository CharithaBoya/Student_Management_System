--List all students with more than 3 enrollments
SELECT student_id, COUNT(*) AS course_count FROM enrollment
GROUP BY student_id HAVING COUNT(*) > 3;
