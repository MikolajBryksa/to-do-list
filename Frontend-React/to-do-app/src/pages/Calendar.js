import React, { useState, useEffect } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // needs additional webpack config!

import { Calendar } from '@fullcalendar/core';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

function TaskCalendar() {

  const [events, setEvents] = useState([]);

  function handleEventClick(eventInfo) {
    const taskId = eventInfo.event.id;
    window.location.href = `/view-task/${taskId}`; }

  useEffect(() => {
    axios.get("http://localhost:8080/calendar").then((response) => {
      const events = response.data.map((task) => {
        return {
          title: task.title,
          details: task.details,
          start: new Date(task.date),
          id: task.id,
          done: task.status,
        };
      });
      setEvents(events);
    });
  }, []);

  return (
    <div className="col-md-10 offset-md-1 border rounded p-4 mt-2 shadow">
    <FullCalendar
      plugins={[dayGridPlugin, bootstrap5Plugin]}
      themeSystem="bootstrap5"
      initialView="dayGridMonth"
      events={events}
      displayEventTime={false}
      eventDisplay="block"
      height="auto"
      eventClick={handleEventClick}
    />
    </div>
  );
}
export default TaskCalendar;