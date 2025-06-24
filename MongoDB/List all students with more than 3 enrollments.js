//  List all students with more than 3 enrollments

db.students.find({ $expr: { $gt: [ { $size: "$enrollments" }, 3 ] } });
