import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import forettisLogo from '../images/forettis-logo.png';
import instagramIcon from '../images/instagram-icon.png';
import yelpIcon from '../images/yelp-icon.png';
import 'animate.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className='navbar bg-white'>
            {isMenuOpen ? (
                <div>
                    <div>
                        <div className='xs:flex justify-between lg:hidden p-3'>
                            <img src={forettisLogo} className='h-12'></img>
                            <button className='text-4xl text-red p-2' onClick={toggleMenu}>☰</button>
                        </div>
                    </div>
                    <div className='h-[80vh] animate__animated animate__fadeInDown flex items-center justify-center'>
                        <ul className='text-center text-2xl'>
                            <li className='p-2'><Link
                                to='/'
                            >Home</Link></li>
                            <li className='p-2'><Link
                                to='/about'
                            >About</Link></li>
                            <li className='p-2'><Link
                                to='/menu'
                            >Menu</Link></li>
                            <li className='p-2'><a
                                href='https://www.opentable.com/r/forettis-corona-del-mar'
                            >Reservations</a></li>
                            <li className='p-2'><Link
                                to='/catering'
                            >Catering</Link></li>
                            <li className='p-2'><Link
                                to='/contact'
                            >Contact</Link></li>
                            <li className='p-2'><a
                                href='https://www.chownow.com/order/29889/locations/44236?utm_source=google&utm_medium=organic&utm_campaign=place_action'
                            >Order Now</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center justify-center pb-7'>
                        <a href='https://www.instagram.com/forettis_/'><img src={instagramIcon} className='h-9 px-3'></img></a>
                        <a href='https://www.yelp.com/biz/forettis-corona-del-mar-2'><img src={yelpIcon} className='h-9 px-3'></img></a>
                    </div>
                </div>
            ) : (
                <div className='flex justify-between p-3 animate__animated animate__fadeInDown'>
                    <Link to='/'><img src={forettisLogo} className='h-12'></img></Link>
                    <ul className='flex items-center xs:hidden lg:flex'>
                        <li className='p-2 text-xl hover:text-red hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                            <Link
                                to='/'
                            >Home</Link>
                        </li>
                        <li className='p-2 text-xl hover:text-red hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                            <Link
                                to='/about'
                            >About</Link>
                        </li>
                        <li className='p-2 text-xl hover:text-red hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                            <Link
                                to='/menu'
                            >Menu</Link>
                        </li>
                        <li className='p-2 text-xl hover:text-red hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                            <a
                                href='https://www.opentable.com/r/forettis-corona-del-mar'
                            >Reservations</a>
                        </li>
                        <li className='p-2 text-xl hover:text-red hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                            <Link
                                to='/catering'
                            >Catering</Link>
                        </li>
                        <li className='p-2 text-xl hover:text-red hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                            <Link
                                to='/contact'
                            >Contact</Link>
                        </li>
                        <li className='p-2 text-xl text-red hover:text-2xl delay-150 transition-all duration-200 ease-in-out'>
                            <a
                                href='https://www.chownow.com/order/29889/locations/44236?utm_source=google&utm_medium=organic&utm_campaign=place_action'
                            >Order Now</a>
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