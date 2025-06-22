-- Get all students enrolled in a specific course
SELECT s.* FROM student s
JOIN enrollment e ON s.id = e.student_id
WHERE e.course_id = 101;
