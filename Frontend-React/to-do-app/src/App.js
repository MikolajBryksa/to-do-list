import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AddTask from './tasks/AddTask';
import EditTask from './tasks/EditTask';
import ViewTask from './tasks/ViewTask';


function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/add-task" element={<AddTask />} />
        <Route exact path="/view-task/:id" element={<ViewTask />} />
        <Route exact path="/edit-task/:id" element={<EditTask />} />
      </Routes>
 
      </Router>
    </div>
  );
}

export default App;

