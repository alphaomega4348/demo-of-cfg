import React, { useState } from "react";
import "./Table.css";
import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from "@remix-run/router";
import {useEffect} from "react"
const url="http://localhost:5173/getStudents"





const fetchUsers= async (url) =>{
    try{
        const res = await fetch(url);
        const data = await res.json();
    }catch(e){
        console.error(e)
    }
}




export default function Table() {
    
    const[students, setStudents] = useState([]);
    useEffect(() => {
        fetchUsers(url);
    }, []); 
    const navigate =  useNavigate();
    const history = createBrowserHistory()
    const handleChange = (event) => {
        console.log(event.target.value);
        // history.push()
        navigate(event.target.value);
        
    }

  return (
    <div>
    <div class="sm:overflow-hidden">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Vowels of the People Association</span>
        <button type="button" class="btn btn-secondary">Home</button>
    </div>
    </nav>
        <table className="table-auto">
            <tr>
              <th>RollNo</th>
              <th>Name</th>
              <th>Level</th>
              <th>Test</th>
            </tr>
            {students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.RollNo}</td>
                                <td>{student.Name}</td>
                                <td>{student.Level}</td>
                <td>
                  <select onChange={handleChange}>
                    <option value="">Select Level</option>
                    <option value="/about">About</option>
                    <option value="/level2">Level 2</option>
                    <option value="/level3">Level 3</option>
                  </select>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
