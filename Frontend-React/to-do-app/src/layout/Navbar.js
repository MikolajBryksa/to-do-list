import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import axios from "axios";
import PopupEmail from './PopupEmail';

export default function Navbar() {

  // const activePage = window.location.pathname;

  const location = useLocation();

  const [show, setShow] = useState(false);

    function toggleShow() {
        setShow(!show)
    }

  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-primary">
        <div className='container justify-content-center'>
          <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
            <Nav className="me-auto">

              <Link to="/" className={location.pathname === '/' ? 'nav-item active btn btn-primary me-1' : 'nav-item btn btn-primary me-1'}>
                Today</Link>

              <Link to="/later" className={location.pathname === '/later' ? 'nav-item active btn btn-primary me-1' : 'nav-item btn btn-primary me-1'}>
                Later</Link>

              <Link to="/archive" className={location.pathname === '/archive' ? 'nav-item active btn btn-primary me-1' : 'nav-item btn btn-primary me-1'}>
                Archive</Link>

              <Link to="/add-task" className={location.pathname === '/add-task' ? 'nav-item active btn btn-primary me-1' : 'nav-item btn btn-primary me-1'}>
                Add task</Link>

              <Link to="/calendar" className={location.pathname === '/calendar' ? 'nav-item active btn btn-primary me-1' : 'nav-item btn btn-primary me-1'}>
                Calendar</Link>

              <PopupEmail show={show} toggleShow={toggleShow} />

              <Link to="/sandbox" className={location.pathname === '/sandbox' ? 'nav-item active btn btn-primary me-1' : 'nav-item btn btn-primary me-1'}>
                Sandbox</Link>

            </Nav>
          </div>
        </div>
      </nav>


    </div>
  )
}
