import React, { useState } from "react";
import "./Table.css";
import About from "./About";
import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from "@remix-run/router";



const data = [
  { RollNo: 12, Name: "Aysuhi", Level: "1", Test: "yes" },
  { RollNo: 2, Name: "Sachi", Level: "4", Test: "yes" },
  { RollNo: 34, Name: "Khushi", Level: "2", Test: "yes" },
];

export default function Table() {
  
    const navigate =  useNavigate();
    const history = createBrowserHistory()
    const handleChange = (event) => {
        console.log(event.target.value);
        // history.push()
        navigate(event.target.value);
        
    }

  return (
    <div>
      <div className="sm:overflow-hidden">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
              Vowels of the People Association
            </span>
            <button type="button" className="btn btn-secondary">
              Home
            </button>
          </div>
        </nav>
        <table className="table-auto">
          <thead>
            <tr>
              <th>RollNo</th>
              <th>Name</th>
              <th>Level</th>
              <th>Test</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, key) => (
              <tr key={key}>
                <td>{val.RollNo}</td>
                <td>{val.Name}</td>
                <td>{val.Level}</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
