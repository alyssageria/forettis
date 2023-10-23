import React from 'react';
import 'animate.css';
import forettisRestaurant from '../../images/forettis-restaurant.png';
import pizzaOven from '../../images/pizza-oven.avif';
import { Link } from 'react-router-dom';

function Home({ currentPage }) {
    return (
        <div>
            <div className='home min-h-[93vh] max-h-[100vh] relative'>
                <div className='min-h-[93vh]  max-h-[100vh] text-center flex justify-center items-center flex-col animate__animated animate__fadeInUp'>
                    <h1 className='welcome text-white text-6xl opacity-100 text-center font-bold'>Welcome to Foretti's</h1>
                    <p className='text-white text-2xl italic'>Traditional Italian Cuisine</p>
                    <div>
                        <button className='text-white text-xl font-bold bg-dark  border-solid border-white border-2 m-3 p-2 pb-1 rounded hover:bg-red transition-all duration-200 ease-in-out'>Book a Table</button>
                        <button className='text-white text-xl font-bold border-solid border-white border-2 m-3 p-2 pb-1 rounded hover:bg-red transition-all duration-200 ease-in-out'>
                            <Link
                                to='/menu'
                                // onClick={() => handlePageChange('Menu')}
                                className={currentPage === 'Menu' ? 'active' : ''}
                            >View the Menu</Link>
                        </button>
                    </div>
                    <div className='absolute bottom-0 left-0 w-full'>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#D21F25" fill-opacity="1"
                            d="M0,224L48,224C96,224,192,224,288,208C384,192,480,160,576,160C672,160,768,192,864,224C960,256,1056,288,1152,261.3C1248,235,1344,149,1392,106.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path></svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 285"><path fill="#fff" fill-opacity="1"
                            d="M0,288L40,266.7C80,245,160,203,240,192C320,181,400,203,480,218.7C560,235,640,245,720,234.7C800,224,880,192,960,197.3C1040,203,1120,245,1200,240C1280,235,1360,181,1400,154.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
                        </path></svg>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 min-h-[80vh] m-10'>
                <div className='flex justify-center items-center animate__animated animate__fadeInLeft'>
                    <img src={pizzaOven} className='pizzaImage h-[23rem] w-[32rem]'></img>
                </div>
                <div className='flex justify-center items-center flex-col animate__animated animate__fadeInRight'>
                    <h2 className='text-red font-bold text-center text-3xl italic'>Centuries of Italian Tradition</h2>
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
                    <h2 className='text-red font-bold text-center text-3xl italic'>Our History</h2>
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