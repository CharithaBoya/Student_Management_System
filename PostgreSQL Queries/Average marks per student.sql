--  Average marks per student
SELECT student_id, AVG(score) AS avg_score FROM marks GROUP BY student_id;
