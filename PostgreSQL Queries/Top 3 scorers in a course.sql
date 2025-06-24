--Top 3 scorers in a course.
SELECT student_id, score FROM marks
WHERE course_id = 101
ORDER BY score DESC LIMIT 3;
