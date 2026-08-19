import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand fw-bold fs-4"
        >
          KRYPOS
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            <li className="nav-item">
              <Link
                to="/"
                className="nav-link px-3"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <a
                href="#products"
                className="nav-link px-3"
              >
                Products
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#about"
                className="nav-link px-3"
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <Link
                to="/login"
                className="nav-link px-3"
              >
                Login
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;