-- Get all courses a student is enrolled in
SELECT c.* FROM course c
JOIN enrollment e ON c.id = e.course_id
WHERE e.student_id = 1;
