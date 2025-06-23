--Add a field to mark students as graduated
ALTER TABLE student ADD COLUMN graduated BOOLEAN DEFAULT FALSE;
UPDATE student SET graduated = TRUE WHERE id = 1;
