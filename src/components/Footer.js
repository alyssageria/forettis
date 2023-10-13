import React from "react";
import forettisLogo from '../images/forettis-logo.png';
import yelpIcon from '../images/yelp-icon.png';
import instagramIcon from '../images/instagram-icon.png';

function Footer() {
    return (
        <div className="bg-dark min-h-[40vh]">
            <div className="flex justify-center p-10">
                <img src={forettisLogo} className="h-14"></img>
            </div>
            <div className="grid grid-cols-4 text-center text-white">
                <div>
                    <h2 className="text-2xl text-red pb-3">Hours</h2>
                    <p className="text-xl p-2">Monday-Sunday:</p>
                    <p className="p-2">4:00 pm - 9:00 pm</p>
                    <p className="italic p-2">Doordash orders stop at 8:30 pm</p>
                </div>
                <div>
                    <h2 className="text-2xl text-red pb-3">Location</h2>
                    <p className="p-2">2929 EAST COAST HWY</p>
                    <p className="p-2">Corona Del Mar, CA 92625</p>
                </div>
                <div>
                    <h2 className="text-2xl text-red pb-3">Contact</h2>
                    <a href="tel+9496752932" className="p-2">(949) 675-2932</a>
                    <p className="p-2">info@forettis.com</p>
                </div>
                <div>
                    <h2 className="text-2xl text-red pb-3">Socials</h2>
                    <div className="flex justify-center p-2">
                        <a href='https://www.instagram.com/forettis_/'><img src={instagramIcon} className='h-9 px-3'></img></a>
                        <a href='https://www.yelp.com/biz/forettis-corona-del-mar-2'><img src={yelpIcon} className='h-9 px-3'></img></a>
                    </div>
                </div>
            </div>
            <p className="text-white text-center pt-10">&copy; 2023 Foretti's</p>
        </div>
    )
}

export default Footer;