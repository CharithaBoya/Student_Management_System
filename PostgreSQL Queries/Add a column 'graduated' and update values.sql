--  Add a column 'graduated' and update values
ALTER TABLE student ADD COLUMN graduated BOOLEAN DEFAULT FALSE;
UPDATE student SET graduated = TRUE WHERE id = 1;
