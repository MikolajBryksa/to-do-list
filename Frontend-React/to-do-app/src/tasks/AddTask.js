import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

export default function AddTask() {

        const [date, setDate] = useState('');
        const [title, setTitle] = useState('');
        const [details, setDetails] = useState('');
        const [priority, setPriority] = useState('');
        const [status, setStatus] = useState('False');

        const handleSubmit = async (e) => {
            e.preventDefault();
            const task = { date, title, details, priority, status }
            await axios.post("http://localhost:8080/api/create-task", task)
            navigate("/");
        }

    let navigate = useNavigate()

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Add task</h2>

                    <form onSubmit={(e) => handleSubmit(e)}>

                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input
                                type={"date"}
                                className="form-control"
                                placeholder="Enter a date"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter a title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="details" className="form-label">Details</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter a details"
                                name="details"
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="priority" className="form-label">Priority</label>
                            <select name="priority" className="form-control" data-toggle="dropdown"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}>

                                <option className="btn" value="">Select priority</option>
                                <option value="NORMAL">Normal</option>
                                <option value="URGNET">Urgent</option>
                            </select>
                        </div>

                        <div className="col-md-12 text-center">
                            <button type="submit" className="btn btn-primary me-1">Save</button>
                            <Link className="btn btn-secondary me-1" to="/">Cancel</Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}
