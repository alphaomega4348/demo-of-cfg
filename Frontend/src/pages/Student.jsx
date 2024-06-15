import React from "react";

const students = [
  {
    name: "John Doe",
    grades: {
      Math: "A",
      Science: "B+",
      History: "A-",
      English: "B",
    },
  },
  {
    name: "Jane Smith",
    grades: {
      Math: "B",
      Science: "A",
      History: "B+",
      English: "A-",
    },
  },
  {
    name: "Alice Johnson",
    grades: {
      Math: "A+",
      Science: "A",
      History: "A",
      English: "A+",
    },
  },
];

const Student = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Student Levels</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">English</th>
              <th className="py-2 px-4 border-b">Hindi</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="hover:bg-gray-100 text-center">
                <td className="py-2 px-4 border-b">{student.name}</td>
                <td className="py-2 px-4 border-b">
                  {student.grades.Math}{" "}
                  <button className="rounded-xl w-1/4 bg-black text-white">
                    Test Again
                  </button>
                </td>
                <td className="py-2 px-4 border-b">
                  {student.grades.Science}{" "}
                  <button className="rounded-xl w-1/4 bg-black text-white">
                    Test Again
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
