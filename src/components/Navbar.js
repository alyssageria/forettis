import React from 'react';
import forettisLogo from '../images/forettis-logo.png';
import instagramIcon from '../images/instagram-icon.png';
import yelpIcon from '../images/yelp-icon.png';
import 'animate.css';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <div>
            <div className='flex justify-between p-3 animate__animated animate__fadeInDown'>
                <img src={forettisLogo} className='h-12'></img>
                <ul className='flex items-center'>
                    <li className='p-2 text-xl hover:text-red hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                        <button
                            onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'active' : ''}
                        >Home</button>
                    </li>
                    <li className='p-2 text-xl hover:text-red hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                        <button
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'active' : ''}
                        >About</button>
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
                    <li className='p-2 text-xl text-red hover:text-black hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                        <button
                            onClick={() => handlePageChange('Order')}
                            className={currentPage === 'Order' ? 'active' : ''}
                        >Order Now</button>
                    </li>
                </ul>
                <div className='flex'>
                    <a href='https://www.instagram.com/forettis_/'><img src={instagramIcon} className='h-12 px-3'></img></a>
                    <a href='https://www.yelp.com/biz/forettis-corona-del-mar-2'><img src={yelpIcon} className='h-12 px-3'></img></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;