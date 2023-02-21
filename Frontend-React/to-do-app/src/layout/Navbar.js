import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>

        <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Tasks</a>

            <Link className="btn btn-outline-light" to="/add-task">Add task</Link>
        </div>
        </nav>

    </div>
  )
}
