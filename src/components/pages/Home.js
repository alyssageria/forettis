import React from 'react';
import 'animate.css';

function Home() {
    return (
        <div className='home h-[80vh]'>
            <div className='h-[80vh] flex justify-center items-center flex-col '>
                <h1 className='welcome text-white text-6xl opacity-100 text-center animate__animated animate__bounceInUp'>Welcome to Foretti's</h1>
                <div className='animate__animated animate__bounceInUp'>
                    <button className='text-white text-xl border-solid border-white border-2 m-3 p-2 rounded hover:bg-red transition-all duration-200 ease-in-out'>Book a Table</button>
                    <button className='text-white text-xl border-solid border-white border-2 m-3 p-2 rounded hover:bg-red transition-all duration-200 ease-in-out'>View the Menu</button>
                </div>
            </div>
        </div>
    )
}

export default Home;