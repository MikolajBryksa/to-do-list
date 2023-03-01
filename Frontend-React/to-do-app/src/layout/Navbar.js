import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export default function Navbar() {

  const activePage = window.location.pathname;

  // const archiveLinkText = document.querySelector('#archive');

  // console.log({archiveLinkText})
  // a NavLink component in react-router 


  return (
    <div>

        <nav className="navbar navbar-expand-lg bg-primary">
          <div className='container justify-content-center'>
            <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
            <Nav className="me-auto">
              <div className='nav-element'><Link className="nav-item btn btn-primary me-1" to="/">Today</Link></div>
              <Link className="nav-item btn btn-primary me-1" to="/later">Later</Link>
              <Link className="nav-item btn btn-primary me-1" to="/archive">Archive</Link>
              <Link className="nav-item btn btn-primary me-1" to="/add-task">Add task</Link>
              <Link className="nav-item btn btn-primary me-1" to="/calendar">Calendar</Link>
              <Link className="nav-item active btn btn-primary me-1" to="/sandbox">Sandbox</Link>
              </Nav>
            </div>
        </div>
        </nav>


    </div>
  )
}
