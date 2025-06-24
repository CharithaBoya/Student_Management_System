//Insert an address as an embedded document inside student
// Adds address inside student document

db.students.updateOne(
  { student_id: 1 },
  {
    $set: {
      address: {
        street: "Church street",
        city: "Hyderabad",
        state: "Telangana",
        pincode: "500001"
      }
    }
  }
);
