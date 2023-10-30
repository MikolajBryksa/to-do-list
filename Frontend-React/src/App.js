import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Later from "./pages/Later";
import Today from "./pages/Today";
import Archive from "./pages/Archive";
import Calendar from "./pages/Calendar";
import AddTask from "./tasks/AddTask";
import EditTask from "./tasks/EditTask";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Today />} />
          <Route exact path="/later" element={<Later />} />
          <Route exact path="/archive" element={<Archive />} />
          <Route exact path="/calendar" element={<Calendar />} />
          <Route exact path="/add-task" element={<AddTask />} />
          <Route exact path="/edit-task/:id" element={<EditTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
