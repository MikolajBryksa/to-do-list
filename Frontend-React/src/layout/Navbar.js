import React from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function Navbar() {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container justify-content-center">
          <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
            <Nav className="me-auto">
              <Link
                to="/add-task"
                className={
                  location.pathname === "/add-task"
                    ? "nav-item active btn btn-primary me-1"
                    : "nav-item btn btn-primary me-1"
                }
              >
                Add
              </Link>

              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "nav-item active btn btn-primary me-1"
                    : "nav-item btn btn-primary me-1"
                }
              >
                Today
              </Link>

              <Link
                to="/later"
                className={
                  location.pathname === "/later"
                    ? "nav-item active btn btn-primary me-1"
                    : "nav-item btn btn-primary me-1"
                }
              >
                Later
              </Link>

              <Link
                to="/archive"
                className={
                  location.pathname === "/archive"
                    ? "nav-item active btn btn-primary me-1"
                    : "nav-item btn btn-primary me-1"
                }
              >
                Archive
              </Link>

              <Link
                to="/calendar"
                className={
                  location.pathname === "/calendar"
                    ? "nav-item active btn btn-primary me-1"
                    : "nav-item btn btn-primary me-1"
                }
              >
                Calendar
              </Link>
            </Nav>
          </div>
        </div>
      </nav>
    </div>
  );
}
