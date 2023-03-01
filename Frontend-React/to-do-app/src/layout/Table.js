import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import Popup from './Popup';

export default function Table(props) {

    const api = props.api;

    const getPriority = (priority) => {
        if (priority === "Normal") return "table-default";
        if (priority === "Urgent") return "table-danger";
        if (priority === "Low") return "table-secondary";
    };
    
    const [tasks, setTasks] = useState([]);
    
    const { id } = useParams()
    
        useEffect(() => {
        loadTasks();
    
    }, []);
    
    const loadTasks = async () => {
        const result = await axios.get(props.api);
        setTasks(result.data);
    }
    
    const statusTask = async (id) => {
        await axios.get(`http://localhost:8080/status-task/${id}`)
        loadTasks();
    }

    const [show, setShow] = useState(false);

    function toggleShow() {
        setShow(!show)
    }

  return (
    
    <div className='container'>
            <div className='py-4'>
                <table className="table table-hover shadow">
                    <thead>
                        <tr>
                            <th className="text-center">Date</th>
                            <th className="text-center">Title</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tasks.map((task, index) => (
                                <tr className={getPriority(task.priority)}>
                                    <td className="text-center">{task.date}</td>
                                    <td className="text-center">{task.title}</td>
                                    <td className="text-center">
                                        <Link className="btn btn-primary me-1" to={`/view-task/${task.id}`}><Icon.ArrowRight /></Link>
                                        <Link className="btn btn-info me-1" to={`/edit-task/${task.id}`}><Icon.PlusLg /></Link>
                                        <button className="btn btn-success me-1" onClick={() => statusTask(task.id)}><Icon.CheckLg /></button>
                                        <Popup task={task} loadTasks={loadTasks} show={show} toggleShow={toggleShow}/>
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
