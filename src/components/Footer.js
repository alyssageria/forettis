import React from "react";
import forettisLogo from '../images/forettis-logo.png';
import yelpIcon from '../images/yelp-icon.png';
import instagramIcon from '../images/instagram-icon.png';

function Footer() {
    return (
        <div className="bg-dark min-h-[40vh]">
            <div className="flex justify-center">
                <img src={forettisLogo} className="h-24 p-5"></img>
            </div>
            <div className="grid grid-cols-4 text-center text-white">
                <div>
                    <h2 className="text-2xl text-red pb-3">Hours</h2>
                    <p className="text-xl">Monday-Sunday:</p>
                    <p>4:00 pm - 9:00 pm</p>
                    <p className="italic">Doordash orders stop at 8:30 pm</p>
                </div>
                <div>
                    <h2 className="text-2xl text-red pb-3">Location</h2>
                    <p>2929 EAST COAST HWY</p>
                    <p>Corona Del Mar, CA 92625</p>
                </div>
                <div>
                    <h2 className="text-2xl text-red pb-3">Contact</h2>
                    <p>(949)675-2932</p>
                    <p>info@forettis.com</p>
                </div>
                <div>
                    <h2 className="text-2xl text-red pb-3">Socials</h2>
                    <div className="flex justify-center">
                        <a href='https://www.instagram.com/forettis_/'><img src={instagramIcon} className='h-9 px-3'></img></a>
                        <a href='https://www.yelp.com/biz/forettis-corona-del-mar-2'><img src={yelpIcon} className='h-9 px-3'></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;