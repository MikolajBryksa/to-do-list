import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import PopupDelete from "./PopupDelete";

export default function Table(props) {
  const location = useLocation();

  const getPriority = (priority) => {
    if (priority === "Normal") return "table-default";
    if (priority === "Urgent") return "table-danger";
    if (priority === "Low") return "table-secondary";
  };

  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState();

  const loadTasks = async () => {
    const result = await axios.get(props.api);
    setTasks(result.data);
  };

  useEffect(() => {
    loadTasks();
    //   eslint-disable-next-line
  }, []);

  const statusTask = async (id) => {
    await axios.get(`http://localhost:8080/status-task/${id}`);
    loadTasks();
  };

  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-hover shadow">
          <thead>
            <tr>
              <th className="text-center" style={{ width: "20%" }}>
                Date
              </th>
              <th className="text-center" style={{ width: "60%" }}>
                Title
              </th>
              <th className="text-center" style={{ width: "20%" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr
                className={getPriority(task.priority)}
                onClick={() => setSelectedTask(task)}
              >
                <td className="text-center" style={{ width: "20%" }}>
                  {task.date}
                </td>
                <td
                  className="text-center"
                  style={{ width: "60%", cursor: "pointer" }}
                  onClick={() =>
                    (window.location.href = `/edit-task/${task.id}`)
                  }
                >
                  {task.title}
                </td>
                <td className="text-center" style={{ width: "20%" }}>
                  <button
                    className={
                      location.pathname === "/archive"
                        ? "btn btn-warning me-1"
                        : "btn btn-primary me-1"
                    }
                    onClick={() => statusTask(task.id)}
                  >
                    {location.pathname === "/archive" ? (
                      <Icon.ReplyFill />
                    ) : (
                      <Icon.CheckLg />
                    )}
                  </button>

                  <button className="btn btn-danger me-1" onClick={toggleShow}>
                    <Icon.XLg />
                    {selectedTask !== undefined && (
                      <PopupDelete
                        task={selectedTask}
                        loadTasks={loadTasks}
                        show={show}
                        toggleShow={toggleShow}
                      />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
