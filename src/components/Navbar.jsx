import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Trisa Abdul Hakim
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  className="bi bi-moon-stars theme-icon-active"
                  data-theme-icon-active="bi-moon-stars"
                ></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
                    className="dropdown-item d-flex align-items-center"
                    type="button"
                    data-bs-theme-value="dark "
                  >
                    <i
                      className="bi bi-moon-stars me-2 opacity-50"
                      data-theme-icon="bi-moon-stars"
                    ></i>
                    Dark
                  </button>
                </li>
                <li>
                <button
                    className="dropdown-item d-flex align-items-center"
                    type="button"
                    data-bs-theme-value="light "
                  >
                    <i
                      className="bi bi-sun me-2 opacity-50"
                      data-theme-icon="bi-sun"
                    ></i>
                    Light
                  </button>
                </li>
                <li>
                <button
                    className="dropdown-item d-flex align-items-center"
                    type="button"
                    data-bs-theme-value="auto"
                  >
                    <i
                      className="bi bi-circle-half me-2 opacity-50"
                      data-theme-icon="bi-circle-half"
                    ></i>
                    Auto
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
