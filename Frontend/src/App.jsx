import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Table from "./components/Table"
import About from "./components/About"

function App() {
  return (
    <Router>
       <div>
        
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/about" element={< About/>}></Route>
        </Routes>
        </div>
     </Router>

  );
}

export default App;
