--Get all students and their total marks
SELECT student_id, SUM(score) AS total_score FROM marks GROUP BY student_id;
