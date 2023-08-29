import React from "react";
import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import Pink from "./Pink";
import Green from "./Green";
import Footer from "./Footer";


export default function MainContainer() {
    return (
        <div id="main-section">
            <Routes>
                <Route path="/blue" element={<Blue />} />
                <Route path="/red" element={<Red />} />
                <Route path="/pink" element={<Pink />} />
                <Route path="/green" element={<Green />} />
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer /> 
        </div>
    )
}