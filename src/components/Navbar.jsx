import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div id="navbar" className="navbar">
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link>
            <Link to="/pink">Pink</Link>
            <Link to="/green">Green</Link>
            <Link to="/">Home</Link>
        </div>
    )
}