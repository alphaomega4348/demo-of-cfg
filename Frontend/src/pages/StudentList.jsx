import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function StudentList() {
  const { id } = useParams();

  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const navigate = useNavigate();
  const handleChange = (event) => {
    navigate(event.target.value);
  };

  const handleCreateStudent = () => {
    navigate(`/createStudent/${id}`);
  };
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/class/getStudentsFromClassRoom/${id}`
      );
      setStudents(data.Students);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <svg
        onClick={() => navigate(`/`)}
        class="h-12 w-12 text-purple-500"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
      </svg>
      <button
        onClick={handleCreateStudent}
        className="rounded-xl mt-10 bg-purple-500 text-white w-[10rem] h-[2rem]"
      >
        Add Student
      </button>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid"></div>
        </nav>
        <table className="table-auto flex flex-col justify-center items-center gap-2 w-full">
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Level</th>
            <th>Test</th>
          </tr>
          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={index}>
                <td>{student.rollNumber}</td>
                <td>{student.name}</td>
                <td>{student.level}</td>
                <td>
                  <select onChange={handleChange}>
                    <option value="">Select Level</option>
                    <option value={`/test/Story/${student._id}`}>Story</option>
                    <option value={`/test/Paragraph/${student._id}`}>
                      Paragraph
                    </option>
                    <option value={`/test/Sentence/${student._id}`}>
                      Sentence
                    </option>
                    <option value={`/test/Word/${student._id}`}>Word</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <p className="text-3xl color-black mb-5">No students found</p>
          )}
        </table>
      </div>
    </div>
  );
}
