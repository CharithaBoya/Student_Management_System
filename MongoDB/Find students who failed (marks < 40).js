//  Find students who failed (marks < 40)

db.students.find({ "marks.score": { $lt: 40 } });
