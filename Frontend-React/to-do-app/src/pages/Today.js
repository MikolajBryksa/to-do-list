import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

export default function Today() {

    const [tasks, setTasks] = useState([]);

    const { id } = useParams()

    useEffect(() => {
        loadTasks();

    }, []);

    const loadTasks = async () => {
        const result = await axios.get("http://localhost:8080/");
        setTasks(result.data);
    }

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:8080/tasks/${id}`)
        loadTasks();
    }

    const statusTask = async (id) => {
        await axios.get(`http://localhost:8080/status-task/${id}`)
        loadTasks();
    }

    const getPriority = (priority) => {
        if (priority === "Normal") return "table-default";
        if (priority === "Urgent") return "table-danger";
        if (priority === "Low") return "table-secondary";
    };

    return (


        <div className='container'>

            <div className='py-4'>
                <table className="table table-hover shadow">
                    <thead>
                        <tr>
                            {/* <th className="text-center">Nr</th> */}
                            <th className="text-center">Date</th>
                            {/* <th className="text-center">Priority</th> */}
                            <th className="text-center">Title</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>



                        {
                            tasks.map((task, index) => (
                                <tr className={getPriority(task.priority)}>
                                    {/* <td className="text-center" key={index}>{index + 1}</td> */}
                                    <td className="text-center">{task.date}</td>
                                    {/* <td className="text-center">{task.priority}</td> */}
                                    <td className="text-center">{task.title}</td>
                                    <td className="text-center">
                                        {/* <Link className="btn btn-primary me-1" to={`/view-task/${task.id}`}>View</Link> */}
                                        <Link className="btn btn-primary me-1" to={`/view-task/${task.id}`}><Icon.ArrowRight /></Link>
                                        <Link className="btn btn-info me-1" to={`/edit-task/${task.id}`}><Icon.PlusLg /></Link>
                                        <button className="btn btn-success me-1" onClick={() => statusTask(task.id)}><Icon.CheckLg /></button>
                                        <button className="btn btn-danger me-1" onClick={() => deleteTask(task.id)}><Icon.XLg /></button>
                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
