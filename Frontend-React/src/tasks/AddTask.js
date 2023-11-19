import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { format } from "date-fns";

export default function AddTask() {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [priority, setPriority] = useState("Normal");

  useEffect(() => {
    const today = new Date();
    const formattedToday = format(today, "yyyy-MM-dd");
    setDate(formattedToday);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { date, title, details, priority, status: false };
    await axios.post("http://localhost:8080/create-task", task);
    navigate("/");
  };

  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add task</h2>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                id="date"
                type="date"
                className="form-control"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                id="title"
                type="text"
                className="form-control"
                placeholder="Title is required"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="details" className="form-label">
                Details
              </label>
              <textarea
                id="details"
                type="text"
                className="form-control"
                placeholder="Details are optional"
                name="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="priority" className="form-label">
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                className="form-control"
                data-toggle="dropdown"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="Normal">Normal</option>
                <option value="Low">Low</option>
                <option value="Urgent">Urgent</option>ś
              </select>
            </div>

            <div className="col-md-12 text-center">
              <button type="submit" className="btn btn-primary me-1">
                <Icon.CheckLg />
              </button>
              <Link
                className="btn btn-secondary me-1"
                to="#"
                onClick={() => window.history.back()}
              >
                <Icon.XLg />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
