import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

export default function EditTask() {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { date, title, details, priority, status: false };
    await axios.put(`http://localhost:8080/tasks/${id}`, task);
    navigate("/");
  };

  let navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    loadTask();
  }, []);

  const loadTask = async () => {
    const result = await axios.get(`http://localhost:8080/tasks/${id}`);
    setDate(result.data.date);
    setTitle(result.data.title);
    setDetails(result.data.details);
    setPriority(result.data.priority);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">{title}</h2>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type={"date"}
                className="form-control"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type={"text"}
                className="form-control"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="details" className="form-label">
                Details
              </label>
              <textarea
                type={"text"}
                className="form-control"
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
                name="priority"
                className="form-control"
                data-toggle="dropdown"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="Normal">Normal</option>
                <option value="Low">Low</option>
                <option value="Urgent">Urgent</option>
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
