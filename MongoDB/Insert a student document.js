// Insert one student document into the 'students' collection
db.students.insertOne({
  student_id: 1,
  name: "Charitha",
  age: 20,
  gender: "Female",
  course: "Computer Science",
  marks: 85
});
