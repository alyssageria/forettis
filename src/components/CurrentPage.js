import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';

function CurrentPage() {
    // const [currentPage, setCurrentPage] = useState('Home');

    // const renderPage = () => {
    //     if (currentPage === 'Home') {
    //         return <Home />;
    //     }
    //     if (currentPage === 'About') {
    //         return <About />;
    //     }
    //     // if (currentPage === 'Menu') {
    //     //     return <Menu />;
    //     // }
    // };

    // const handlePageChange = (page) => setCurrentPage(page);

    // return (
    //     <div >
    //         <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    //         {renderPage()}
    //     </div>
    // );
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default CurrentPage;