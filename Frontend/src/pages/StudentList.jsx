import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const url = "http://localhost:3000/api/student/getStudents";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetchUsers(url);
  }, []);
  const navigate = useNavigate();
  const handleChange = (event) => {
    navigate(event.target.value);
  };

  const handleCreateStudent = () => {
    navigate("/createStudent");
  };
  const fetchUsers = async (url) => {
    try {
      const { data } = await axios.get(url);
      setStudents(data.students);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        onClick={handleCreateStudent}
        className="rounded-xl mt-10 bg-pink-500 text-white w-[10vw] h-[2rem]"
      >
        Add Student
      </button>
      <div class="sm:overflow-hidden">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid"></div>
        </nav>
        <table className="table-auto">
          <tr>
            <th>Standard</th>
            <th>Name</th>
            <th>Level</th>
            <th>Test</th>
          </tr>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.standard}</td>
              <td>{student.name}</td>
              <td>{student.level}</td>
              <td>
                <select onChange={handleChange}>
                  <option value="">Select Level</option>
                  <option value={`/test/Story/${student._id}`}>Story</option>
                  <option value={`/test/Paragraph/${student._id}`}>Paragraph</option>
                  <option value={`/test/Sentence/${student._id}`}>Sentence</option>
                  <option value={`/test/Word/${student._id}`}>Word</option>
                </select>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
