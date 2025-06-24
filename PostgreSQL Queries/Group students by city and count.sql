--  Group students by city and count
SELECT a.city, COUNT(s.id) AS student_count
FROM student s
JOIN address a ON s.id = a.student_id
GROUP BY a.city;
