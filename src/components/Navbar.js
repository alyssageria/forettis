import React from 'react';
import forettisLogo from '../images/forettis-logo.png';
import instagramIcon from '../images/instagram-icon.png';
import yelpIcon from '../images/yelp-icon.png';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <div>
            <div>
                <img src={forettisLogo}></img>
                <ul>
                    <li>
                        <button
                            onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'active' : ''}
                        >Home</button>
                    </li>
                    <li>
                        <button
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'active' : ''}
                        >About</button>
                    </li>
                    <li>
                        <button
                            onClick={() => handlePageChange('Menu')}
                            className={currentPage === 'Menu' ? 'active' : ''}
                        >Menu</button>
                    </li>
                    <li>
                        <button
                            onClick={() => handlePageChange('Reservations')}
                            className={currentPage === 'Reservations' ? 'active' : ''}
                        >Reservations</button>
                    </li>
                    <li>
                        <button
                            onClick={() => handlePageChange('Catering')}
                            className={currentPage === 'Catering' ? 'active' : ''}
                        >Catering</button>
                    </li>
                    <li>
                        <button
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'active' : ''}
                        >Contact</button>
                    </li>
                </ul>
                <div>
                    <img src={instagramIcon}></img>
                    <img src={yelpIcon}></img>
                </div>
            </div>
        </div>
    )
}

export default Navbar;