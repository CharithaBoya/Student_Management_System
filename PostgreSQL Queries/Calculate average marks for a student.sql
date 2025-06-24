--Calculate average marks for a student
SELECT student_id, AVG(score) AS avg_score FROM marks GROUP BY student_id;
