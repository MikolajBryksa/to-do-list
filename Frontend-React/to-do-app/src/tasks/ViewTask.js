import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

export default function ViewTask() {

    const [task, setTask] = useState({
        date: "",
        title: "",
        details: "",
        priority: "",
        status: "",
    })

    const { id } = useParams();

    useEffect(() => {
        loadTask();
    }, [])

    const loadTask = async () => {
        const result = await axios.get(`http://localhost:8080/tasks/${id}`);
        setTask(result.data);
    }

    const status = task.status

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">{task.title}</h2>

                    <div className='card'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                Date: <b>{task.date}</b>
                            </li>
                            <li className='list-group-item'>
                                Details: <b>{task.details}</b>
                            </li>
                            <li className='list-group-item'>
                                Priority: <b>{task.priority}</b>
                            </li>
                            <li className='list-group-item'>
                                Done: <b>{String(status)}</b>
                            </li>
                        </ul>
                    </div>
                    <br></br>
                    <div className="col-md-12 text-center">
                        <Link className="btn btn-secondary me-1" to="#" onClick={() => window.history.back()}><Icon.XLg /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
