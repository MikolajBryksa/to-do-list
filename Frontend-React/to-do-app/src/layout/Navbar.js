import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>

        <nav className="navbar navbar-expand-lg bg-primary">
          <div className='container justify-content-center'>
            <div class="collapse navbar-collapse flex-grow-0">
              <Link className="btn btn-primary me-1 mx-auto" to="/">Home</Link>
              <Link className="btn btn-primary me-1" to="/add-task">Archive</Link>
              <Link className="btn btn-primary me-1" to="/add-task">Add task</Link>
            </div>
        </div>
        </nav>

    </div>
  )
}
