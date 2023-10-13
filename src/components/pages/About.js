import React from 'react';
import ownersImage from '../../images/owners-forettis.avif';
import tridish from '../../images/multidish-pic-2.avif';
import 'animate.css';

function About() {
    return (
        <div>
            {/* <h1 className='text-red text-center text-8xl m-10'>ABOUT</h1> */}
            <div className='flex min-h-[50vh] m-10 animate__animated animate__fadeInDown'>
                <div className='flex justify-center items-end w-1/2 '>
                    <img src={ownersImage} className='ownersImage h-[25rem]'></img>
                </div>
                <div className='w-1/2 m-4 flex flex-col justify-end text-right'>
                    <h1 className='text-red text-9xl'>ABOUT</h1>
                    <hr className='border-solid border-2 border-red m-3'></hr>
                    <h2 className='text-red font-bold italic text-3xl'>Bringing Centuries of Italian Tradition to Corona del Mar</h2>
                    <p>Foretti's CDM established itself as a highlight of the Newport Beach dining scene when it opened in 2013. Operating under the new ownership of longtime Restaurateur and Level 1 Sommelier Thaddeus Foret, we continue to prepare our signature recipes, created by the restaurant's namesake chef and his culinary team—many of whom remain in our kitchen today.

                        Foretti's is a celebration of Italian traditions, specializing in authentic Associazione Verace Pizza Napoletana-certified wood-fired pizzas baked in a 900 degree oven with the same techniques and ingredients used in Naples, Italy.

                        We also feature house made pastas and favorite dishes from across Italy, expertly paired with craft cocktails and a curated selection of Italian and California Wines; several from Orange County wine owners.</p>
                </div>
            </div>
            <div className='flex items-center bg-red min-h-[60vh] animate__animated animate__fadeInUp'>
                <div className='w-2/3 m-4'>
                    <h2 className='text-white text-7xl font-bold p-6'>NEW NAME,</h2>
                    <h3 className='text-dark text-6xl pl-20 pb-5 italic'>Same Greatness...</h3>
                    <p className='text-white text-xl font-bold'>London-born Thaddeus Foret, Foretti's new owner, brings more than 30 years of experience in hospitality to Corona del Mar, and has been a standard bearer for restaurant operations in the region, working his way over time from table busser to General Manager, then Managing Partner, at Antonello Ristorante South Coast Plaza.

                        He was also instrumental in the purchase of Villa Nova with partners, who would all go on to create The Winery Restaurant in Newport Harbor together. He purchased Foretti's in August 2020 after realizing his true passion for Italian cuisine.

                        Foretti's features restaurant dining, delivery with DoorDash and Postmates, and catering for your group dining needs.</p>
                </div>
                <div className='m-4 flex items-center'>
                    <img src={tridish} className='tridish h-[25rem]'></img>
                </div>
            </div>
        </div>
    )
}

export default About;