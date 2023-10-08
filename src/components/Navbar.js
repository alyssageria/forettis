import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import forettisLogo from '../images/forettis-logo.png';
import instagramIcon from '../images/instagram-icon.png';
import yelpIcon from '../images/yelp-icon.png';
import 'animate.css';

function Navbar({ currentPage, handlePageChange }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div>
            {isMenuOpen ? (
                <div>
                    <div>
                        <div className='xs:flex justify-between lg:hidden p-3'>
                            <img src={forettisLogo} className='h-12'></img>
                            <button className='text-4xl text-red p-2' onClick={toggleMenu}>☰</button>
                        </div>
                    </div>
                    <div className='h-[90vh] animate__animated animate__fadeInDown flex items-center justify-center'>
                        <ul className='text-center text-2xl'>
                            <li className='p-2'>Home</li>
                            <li className='p-2'>About</li>
                            <li className='p-2'>Menu</li>
                            <li className='p-2'>Reservations</li>
                            <li className='p-2'>Catering</li>
                            <li className='p-2'>Contact</li>
                            <li className='p-2'>Order Now</li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div className='flex justify-between p-3 animate__animated animate__fadeInDown'>
                    <Link to='/'><img src={forettisLogo} className='h-12'></img></Link>
                    <ul className='flex items-center xs:hidden lg:flex'>
                        <li className='p-2 text-xl hover:text-red hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                            <Link
                                to='/'
                                // onClick={() => handlePageChange('Home')}
                                className={currentPage === 'Home' ? 'active' : ''}
                            >Home</Link>
                        </li>
                        <li className='p-2 text-xl hover:text-red hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                            <Link
                                to='/about'
                                // onClick={() => handlePageChange('About')}
                                className={currentPage === 'About' ? 'active' : ''}
                            >About</Link>
                        </li>
                        <li className='p-2 text-xl hover:text-red hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                            <button
                                onClick={() => handlePageChange('Menu')}
                                className={currentPage === 'Menu' ? 'active' : ''}
                            >Menu</button>
                        </li>
                        <li className='p-2 text-xl hover:text-red hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                            <button
                                onClick={() => handlePageChange('Reservations')}
                                className={currentPage === 'Reservations' ? 'active' : ''}
                            >Reservations</button>
                        </li>
                        <li className='p-2 text-xl hover:text-red hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                            <button
                                onClick={() => handlePageChange('Catering')}
                                className={currentPage === 'Catering' ? 'active' : ''}
                            >Catering</button>
                        </li>
                        <li className='p-2 text-xl hover:text-red hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                            <button
                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'active' : ''}
                            >Contact</button>
                        </li>
                        <li className='p-2 text-xl text-red hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                            <button
                                onClick={() => handlePageChange('Order')}
                                className={currentPage === 'Order' ? 'active' : ''}
                            >Order Now</button>
                        </li>
                    </ul>
                    <div className='flex items-center xs:hidden lg:flex'>
                        <a href='https://www.instagram.com/forettis_/'><img src={instagramIcon} className='h-9 px-3'></img></a>
                        <a href='https://www.yelp.com/biz/forettis-corona-del-mar-2'><img src={yelpIcon} className='h-9 px-3'></img></a>
                    </div>
                    <div className='xs:flex justify-end lg:hidden'>
                        <button className='text-4xl text-red p-2' onClick={toggleMenu}>☰</button>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Navbar;