import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Catering from './pages/Catering';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Footer from './Footer';

function CurrentPage() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/catering" element={<Catering />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/menu" element={<Menu />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default CurrentPage;