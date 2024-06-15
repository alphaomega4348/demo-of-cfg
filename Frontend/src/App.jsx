import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Test from "./pages/Test"
import Home from "./pages/Home";
import CreateStudent from "./pages/CreateStudent";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import StudentList from "./pages/StudentList";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/StudentList" element={<StudentList />} />
          <Route path="/test/:type" element={<Test />} />
          <Route path="/createStudent" element={<CreateStudent />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
