import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
    
    return (
        <nav className="navbar">
            <h1>To-Do List</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/TodoForm">New Tasks</Link>
            </div>

        </nav>
    )
}

export default NavBar;