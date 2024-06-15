import React from "react";

// Sample data
const students = [
  {
    id: 1,
    name: "John Doe",
    age: 20,
    course: "Computer Science",
    university: "JIIT Noida",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 22,
    course: "Information Technology",
    university: "MIT",
  },
  {
    id: 3,
    name: "Sam Johnson",
    age: 21,
    course: "Software Engineering",
    university: "Stanford",
  },
];

const StudentList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">List of Students</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student) => (
          <div key={student.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{student.name}</h2>
            <p>
              <strong>Standard:</strong> {student.age}
            </p>
            <p>
              <strong>Class:</strong> {student.course}
            </p>
            <button className="rounded-xl bg-black text-white w-1/2">Click Here</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
