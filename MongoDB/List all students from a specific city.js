//  List all students from a specific city

db.students.find({ "address.city": "Bangalore" });
