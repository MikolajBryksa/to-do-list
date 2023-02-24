import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

export default function AddTask() {

    let navigate = useNavigate()

    const [selectedOption, setSelectedOption] = useState('');

    const [task, setTask] = useState({
        date: "",
        title: "",
        details: "",
        priority: "",
        status: "False",
    })


    // https://www.youtube.com/watch?v=4oCH5WaJHzk
    const { date, title, details, priority, status } = task


    const onInputChange = (e) => {

        setSelectedOption(e.target.value);
        setTask({ ...task, [`${e.target.name}`]: e.target.value });
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/create-task", task)
        navigate("/");
    };


    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Add task</h2>

                    <form onSubmit={(e) => onSubmit(e)}>

                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input
                                type={"date"}
                                className="form-control"
                                placeholder="Enter a date"
                                name="date"
                                value={date}
                                onChange={(e) => onInputChange(e)}
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
                                onChange={(e) => onInputChange(e)}
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
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="dropdown">
                            Priority
                            <select name="priority" value={selectedOption} onChange={onInputChange}
                                className="form-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <option className="btn" value="">Select priority</option>
                                <option value="NORMAL">Normal</option>
                                <option value="URGNET">Urgent</option>
                            </select>
                        </div>

                        <br></br>

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
