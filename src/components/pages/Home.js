import React from 'react';
import 'animate.css';
import forettisRestaurant from '../../images/forettis-restaurant.png';
import pizzaOven from '../../images/pizza-oven.avif';
import { Link } from 'react-router-dom';

function Home({ currentPage }) {
    return (
        <div>
            <div className='home min-h-[80vh]'>
                <div className='min-h-[80vh] text-center flex justify-center items-center flex-col animate__animated animate__fadeInUp'>
                    <h1 className='welcome text-white text-6xl opacity-100 text-center'>Welcome to Foretti's</h1>
                    <p className='text-white text-2xl italic'>Traditional Italian Cuisine</p>
                    <div>
                        <button className='text-white text-xl border-solid border-white border-2 m-3 p-2 pb-1 rounded hover:bg-red transition-all duration-200 ease-in-out'>Book a Table</button>
                        <button className='text-white text-xl border-solid border-white border-2 m-3 p-2 pb-1 rounded hover:bg-red transition-all duration-200 ease-in-out'>
                            <Link
                                to='/menu'
                                // onClick={() => handlePageChange('Menu')}
                                className={currentPage === 'Menu' ? 'active' : ''}
                            >View the Menu</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 min-h-[80vh] m-10'>
                <div className='flex justify-center items-center animate__animated animate__fadeInLeft'>
                    <img src={pizzaOven} className='pizzaImage h-[23rem] w-[32rem]'></img>
                </div>
                <div className='flex justify-center items-center flex-col animate__animated animate__fadeInRight'>
                    <h2 className='text-red text-center text-3xl italic'>Centuries of Italian Tradition</h2>
                    <p className='text-xl text-center p-5'>Foretti's is a celebration of Italian traditions, specializing in authentic Associazione Verace Pizza Napoletana-certified wood-fired pizzas baked in a 900 degree oven with the same techniques and ingredients used in Naples, Italy. We also feature house-made pastas and favorite dishes from across Italy</p>
                    <button className='text-red text-xl border-solid border-red border-2 m-3 p-2 pb-1 rounded hover:bg-red hover:text-white transition-all duration-200 ease-in-out'>
                        <Link
                            to='/menu'
                            // onClick={() => handlePageChange('Menu')}
                            className={currentPage === 'Menu' ? 'active' : ''}
                        >View the Menu</Link>
                    </button>
                </div>
                <div className='flex justify-center items-center flex-col animate__animated animate__fadeInRight'>
                    <h2 className='text-red text-center text-3xl italic'>Our History</h2>
                    <p className='text-xl text-center p-5'>Foretti's CDM established itself as a highlight of the Newport Beach dining scene when it opened in 2013. Operating under the new ownership of longtime Restaurateur and Level 1 Sommelier Thaddeus Foret, we continue to prepare our signature recipes, created by the restaurant's namesake chef and his culinary team—many of whom remain in our kitchen today.</p>
                    <button className='text-red text-xl border-solid border-red border-2 m-3 p-2 pb-1 rounded hover:bg-red hover:text-white transition-all duration-200 ease-in-out'>
                        <Link
                            to='/about'
                            // onClick={() => handlePageChange('Menu')}
                            className={currentPage === 'Menu' ? 'active' : ''}
                        >Learn More</Link>
                    </button>
                </div>
                <div className='flex justify-center items-center animate__animated animate__fadeInLeft'>
                    <img src={forettisRestaurant} className='restaurantImage h-[23rem] w-[32rem]'></img>
                </div>
            </div>
        </div>
    )
}

export default Home;