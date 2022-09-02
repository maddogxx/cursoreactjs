import "./content.css";
import React from "react";
import {Routes, Route } from "react-router-dom";
import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";

export default function Content() {
    return (
        <main className="Content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/param/:id" element={<Param />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
    );
}
