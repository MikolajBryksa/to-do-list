import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Today from './pages/Today';
import Archive from './pages/Archive';
import AddTask from './tasks/AddTask';
import EditTask from './tasks/EditTask';
import ViewTask from './tasks/ViewTask';
import Sandbox from './pages/Sandbox';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/today" element={<Today />} />
          <Route exact path="/archive" element={<Archive />} />
          <Route exact path="/add-task" element={<AddTask />} />
          <Route exact path="/sandbox" element={<Sandbox />} />
          <Route exact path="/view-task/:id" element={<ViewTask />} />
          <Route exact path="/edit-task/:id" element={<EditTask />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;

