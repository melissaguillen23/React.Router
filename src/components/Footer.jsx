import React from "react";
import {Link} from "react-router-dom"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <Link to="/blue">Blue</Link>
                <Link to="/red">Red</Link>
                <Link to="/pink">Pink</Link>
                <Link to="/green">Green</Link>
                <Link to="/">Home</Link>
            </div>
        </footer>
    )
}