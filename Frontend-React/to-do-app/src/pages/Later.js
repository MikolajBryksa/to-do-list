import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

export default function Later() {

    const [tasks, setTasks] = useState([]);

    const { id } = useParams()

    useEffect(() => {
        loadTasks();

    }, []);

    const loadTasks = async () => {
        const result = await axios.get("http://localhost:8080/later");
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

    return (


        <div className='container'>

            <div className='py-4'>
                <table className="table table-striped table-hover shadow">
                    <thead>
                        <tr>
                            <th class="text-center">Nr</th>
                            <th class="text-center">Date</th>
                            <th class="text-center">Title</th>
                            <th class="text-center">Priority</th>
                            <th class="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tasks.map((task, index) => (
                                <tr>
                                    <td class="text-center" key={index}>{index + 1}</td>
                                    <td class="text-center">{task.date}</td>
                                    <td class="text-center">{task.title}</td>
                                    <td class="text-center">{task.priority}</td>
                                    <td class="text-center">
                                        <Link className="btn btn-primary me-1" to={`/view-task/${task.id}`}>View</Link>
                                        <Link className="btn btn-info me-1" to={`/edit-task/${task.id}`}>Edit</Link>
                                        <button className="btn btn-success me-1" onClick={() => statusTask(task.id)}>Done</button>
                                        <button className="btn btn-danger me-1" onClick={() => deleteTask(task.id)}>Delete</button>
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
