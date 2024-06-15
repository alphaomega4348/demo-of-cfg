import React from "react";
import "./Table.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const data = [
    { RollNo: 12, Name: "Aysuhi", Level:"1", Test:"yes" },
    { RollNo: 2, Name: "Sachi", Level:"4", Test:"yes" },
    { RollNo: 34, Name: "Khushi", Level:"2", Test:"yes"},
]
 


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Level1</Link>
        </li>
        <li>
          <Link to="/about">Level2</Link>
        </li>
        <li>
          <Link to="/topics">Level3</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/abc" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default BasicExample;