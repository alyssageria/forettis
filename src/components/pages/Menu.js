import React, { useState } from 'react';

function Menu() {
    const [activeMenu, setActiveMenu] = useState('MENU');

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    }

    return (
        <div>
            <h1 className='text-red text-8xl text-right m-10'>MENU</h1>
            <hr className='border-solid border-2 border-red m-3'></hr>
            <div>
                <div className='text-center'>
                    <button className='text-red text-3xl p-3' onClick={() => handleMenuClick('MENU')}>
                        {activeMenu === 'MENU' ? (
                            <span className="border-b-2 border-red">MENU</span>
                        ) : (
                            'MENU'
                        )}
                    </button>
                    <button className='text-red text-3xl p-3' onClick={() => handleMenuClick('DRINKS')}>
                        {activeMenu === 'DRINKS' ? (
                            <span className="border-b-2 border-red">DRINKS</span>
                        ) : (
                            'DRINKS'
                        )}
                    </button>
                    <button className='text-red text-3xl p-3' onClick={() => handleMenuClick('CATERING')}>
                        {activeMenu === 'CATERING' ? (
                            <span className="border-b-2 border-red">CATERING</span>
                        ) : (
                            'CATERING'
                        )}
                    </button>
                </div>
            </div>
            <div>
                {activeMenu === 'MENU' && <FoodMenu />}
                {activeMenu === 'DRINKS' && <DrinkMenu />}
                {activeMenu === 'CATERING' && <CateringMenu />}
            </div>
        </div>
    )
}

function FoodMenu() {
    return (
        <div>
            <h1>food</h1>
        </div>
    )
}

function DrinkMenu() {
    return (
        <div>
            <h1>drinks</h1>
        </div>
    )
}

function CateringMenu() {
    return (
        <div>
            <h1>catering</h1>
        </div>
    )
}

export default Menu;