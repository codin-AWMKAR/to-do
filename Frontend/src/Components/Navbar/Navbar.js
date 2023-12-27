import React from 'react';
import "./Navbar.css";
import { GiNotebook } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <GiNotebook className="navbar-icon"  style={{  fontSize: "45px" }}/> &nbsp;<h1 className="navbar-brand2">TODOM</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2 ">
                <Link className="nav-link active"  aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item mx-2 ">
                <Link className="nav-link active"  aria-current="page" to="/todom">TODOM</Link>
              </li>
              <li className="nav-item btn-nav mx-2">
                <Link className="nav-link active " style={{color:"white"}} aria-current="page" to="/signup">Sign Up</Link>
              </li>
              <li className="nav-item btn-nav mx-2">
                <Link className="nav-link active " aria-current="page" style={{color:"white"}} to="/signin">Sign In</Link>
              </li>
              <li className="nav-item btn-nav mx-2">
                <Link className="nav-link active " aria-current="page" style={{color:"white"}} to="/logout">Log Out</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;

