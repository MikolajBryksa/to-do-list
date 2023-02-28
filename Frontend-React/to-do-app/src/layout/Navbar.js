import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>

        <nav className="navbar navbar-expand-lg bg-primary">
          <div className='container justify-content-center'>
            <div class="collapse navbar-collapse flex-grow-0">
              <Link className="btn btn-primary me-1" to="/">Today</Link>
              <Link className="btn btn-primary me-1" to="/later">Later</Link>
              <Link className="btn btn-primary me-1" to="/archive">Archive</Link>
              <Link className="btn btn-primary me-1" to="/add-task">Add task</Link>
              <Link className="btn btn-primary me-1" to="/calendar">Calendar</Link>
              <Link className="btn btn-primary me-1" to="/sandbox">Sandbox</Link>
            </div>
        </div>
        </nav>

    </div>
  )
}
