import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="./">{props.title}</Link> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">Contact Us</Link>
              </li>
              
              <li className="nav-item">
                <Link className="btn btn-outline-light" to="/users/add">Add To List</Link>
              </li>



            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}
