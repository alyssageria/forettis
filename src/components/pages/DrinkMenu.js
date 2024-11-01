import React from "react";

function DrinkMenu() {
    const cocktails = [
        {
            id: 1,
            cocktail: 'Negroni',
            description: 'Gin, Red Vermouth, Campari, Orange Peel',
            price: '$14'
        },
        {
            id: 2,
            cocktail: 'Bellini',
            description: 'Peach Puree, Prosecco',
            price: '$14'
        },
        {
            id: 3,
            cocktail: 'Limoncello Martini',
            description: 'Italian Lemon Liquer, Titos Vodka, Lemon',
            price: '$16'
        },
        {
            id: 4,
            cocktail: 'Forettis Old Fashion',
            description: '1800 Anejo Bitters, Sliced Orange, Cherry Garnish',
            price: '$16'
        },
        {
            id: 5,
            cocktail: 'Aperol Spritz',
            description: 'Aperol, Prosecco, Soda, Orange Peel',
            price: '$14'
        },
        {
            id: 6,
            cocktail: 'Italian Stallion',
            description: 'Woodford Reserve, Campari, Averna Amaro, Lemon Twist',
            price: '$16'
        },
        {
            id: 7,
            cocktail: 'Italian Margarita',
            description: '1800 Cuervo Tequila, Amaretto, Lemon, Lime',
            price: '$16'
        }
    ]

    const sparklingWines = [
        {
            id: 1,
            sparklingWine: 'Forettis Selection',
            description: 'Special Selection Prosecco "Bosa", Piemonte, NV',
            notes: 'Pear, Melon, Flowers',
            price: 'Glass $12 | Bottle $46'
        },
        {
            id: 2,
            sparklingWine: 'Zonin',
            description: 'Prosecco Rose, Veneto, NV',
            notes: 'Strawberries, Lime, Watermelon',
            price: '187ml $13'
        },
        {
            id: 3,
            sparklingWine: 'Jean Moreau Blanc de Blancs',
            description: 'Ambonnay Champagne, NV',
            notes: 'Lemon, Green Apple, Citrus',
            price: 'Glass $20| Bottle $80'
        },
        {
            id: 4,
            sparklingWine: 'Laherte Freres',
            description: 'Extra Brut Ultradition, Champagne, NV',
            notes: 'Pear, Flowers, Spice',
            price: '1/2 Bottle $46'
        },
        {
            id: 5,
            sparklingWine: 'Gaston Chiquet',
            description: 'Brut Champagne, NV',
            notes: 'Orchard Fruit, Apricot, Citrus',
            price: 'Bottle $80'
        },
        {
            id: 6,
            sparklingWine: 'Vilmart',
            description: "Grand Cellier d'Or, Champagne, 2016",
            notes: 'Green Apple, Tangerine, Bright Acidit',
            price: 'Bottle $175'
        },
        {
            id: 7,
            sparklingWine: 'Laherte Freres',
            description: 'Rose de Meunier Extra Brut, Champagne, NV',
            notes: 'Orange Peel, Berries, Rose Petal',
            price: 'Bottle $86'
        },
    ]

    return (
        <div className="w-full flex flex-col items-center">
            <div className='border-solid border-2 border-red xs:w-auto md:w-[80%] m-10'>
                <div classname='cocktails'>
                    <div className='bg-red min-h-[5rem] flex items-center justify-center'>
                        <h1 className='text-white text-4xl italic'>Cocktails</h1>
                    </div>
                    <div className='per-la-tavola grid grid-rows-4 grid-flow-col col-start-auto col-end-auto gap-12 m-10'>
                        {cocktails.map(cocktails => {
                            return (
                                <div key={cocktails.id} className='flex flex-col p-3'>
                                    <div div className='flex justify-between font-bold italic'>
                                        <h2 className="text-lg">{cocktails.cocktail}</h2>
                                        <p className="text-lg">{cocktails.price}</p>
                                    </div>
                                    <p className="text-lg">{cocktails.description}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
            <div className="border-solid border-2 border-red xs:w-auto md:w-[80%] m-10">
                <div className='sparklingWines'>
                    <div className='bg-red min-h-[5rem] flex items-center justify-center'>
                        <h1 className='text-white text-4xl italic'>Wine List</h1>
                    </div>
                    <h3 className="text-3xl italic font-bold text-red m-10 text-center">Sparkling Wines</h3>
                    <div className='per-la-tavola grid grid-rows-4 grid-flow-col col-start-auto col-end-auto gap-12 m-10'>
                        {sparklingWines.map(sparkling => {
                            return (
                                <div key={sparkling.id} className='flex flex-col items-center'>
                                    <div div className='flex justify-between font-bold italic'>
                                        <h2 className="text-lg">{sparkling.sparklingWine}</h2>
                                    </div>
                                    <p className="text-lg">{sparkling.description}</p>
                                    <p className="text-lg italic font-bold">{sparkling.price}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrinkMenu;