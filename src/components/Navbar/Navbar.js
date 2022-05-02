import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="#">Random User</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><CustomLink className="nav-link active" aria-current="page" to="/home">Home</CustomLink></li>
                        <li className="nav-item"><CustomLink className="nav-link" to="/users">Users</CustomLink></li>
                        <li className="nav-item"><CustomLink className="nav-link" to="/login">Login</CustomLink></li>
                    </ul>
                    <span className="navbar-text">USER</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
