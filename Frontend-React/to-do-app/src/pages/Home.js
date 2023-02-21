import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Home() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();

    }, []);

    const loadTasks = async () => {
        const result = await axios.get("http://localhost:8080/tasks");
        setTasks(result.data);
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table class="table table-striped table-hover shadow">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th class="text-center">Date</th>
                            <th class="text-center">Title</th>
                            <th class="text-center">Details</th>
                            <th class="text-center">Priority</th>
                            <th class="text-center">Status</th>
                            <th class="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tasks.map((task,index)=>(
                        <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td class="text-center">{task.date}</td>
                            <td class="text-center">{task.title}</td>
                            <td class="text-center">{task.details}</td>
                            <td class="text-center">{task.priority}</td>
                            <td class="text-center">{task.status}</td>
                            <td class="text-center">
                                <button className="btn btn-primary mx-2">Edit</button>
                                <button className="btn btn-danger mx-2">Delete</button>
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
