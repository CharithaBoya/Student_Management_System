# Student Management System – SQL & NoSQL Queries

This repository contains the implementation of SQL and NoSQL (MongoDB) queries based on a **Student Management System** scenario. It includes operations for managing students, addresses, courses, enrollments, and marks.

# Scenario

We are working with a **Student Management System**. The data models include:

- **Student**: Basic student information.
- **Address**: A student's address (1-to-1).
- **Course**: Courses a student can enroll in.
- **Enrollment**: A mapping between student and course (many-to-many).
- **Marks**: Marks scored by students in each course (1-to-many).

# Relational Schema (PostgreSQL)

student(id, name, email, phone)
address(student_id, street, city, state)       -- 1-to-1
course(id, name, description)
enrollment(student_id, course_id)              -- many-to-many
marks(student_id, course_id, score)            -- 1-to-many


