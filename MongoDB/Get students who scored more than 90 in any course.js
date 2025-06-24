//  Get students who scored more than 90 in any course

db.students.find({ "marks.score": { $gt: 90 } });
