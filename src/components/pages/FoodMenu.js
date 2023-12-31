import React from "react"
import heirloomTom from '../../images/heirloom-tom.webp';
import yellowBeets from '../../images/yellow-beets.webp';
import octopusSalmon from '../../images/octopus-salmon.webp';
import eggplantParm from '../../images/eggplant-parm.webp';
import bruschetta from '../../images/bruschetta.webp';
import carpaccioCarne from '../../images/carpaccio-carne.jpg';
import calamariFritti from '../../images/calamari-fritti.webp';
import zucca from '../../images/zucca.webp';

function FoodMenu() {
    const perLaTavola = [
        {
            id: 1,
            dish: 'Olive Fritte',
            description: 'Fontina stuffed Castelvetrano olives, lightly flash fried, oregano, sea salt',
            price: '$13'
        },
        {
            id: 2,
            dish: 'Heirloom Tomato & Burrata Carpaccio',
            description: 'Local organic heirloom tomatoes, arugula, Castelvetrano olives with creamy burrata mozzarella, organic basil',
            price: '$20',
            image: heirloomTom
        },
        {
            id: 3,
            dish: 'Golden Yellow Beets',
            description: 'Organic baby greens, wild berry dressing, fresh raspberries, organic goat cheese, caramelized pecans',
            price: '$20',
            image: yellowBeets
        },
        {
            id: 4,
            dish: 'Octopus & Tasmanian Salmon',
            description: 'Braised Italian octopus, thinly sliced sashimi grade Tasmanian salmon, unfiltered EVOO, teardrop peppers, lemon preserves, tomatoes, organic greens, Maldon salt flakes, capers',
            price: '$23',
            image: octopusSalmon
        },
        {
            id: 5,
            dish: 'Eggplant Parmigiana',
            description: 'Lightly breaded baked eggplant, mozzarella, Polpette sauce',
            price: 'Appetizer $18 | With Pasta $25',
            image: eggplantParm
        },
        {
            id: 6,
            dish: 'Mamma Mia Meatballs',
            description: 'Three housemade meatballs, ragù, burrata and fresh basil',
            price: '$23'
        },
        {
            id: 7,
            dish: 'Bruschetta Tricolore',
            description: 'Pizza style crust, Greek oregano, fresh garlic, unfiltered EVOO, topped with arugula, cherry tomatoes, and fresh mozzarella',
            price: '$22',
            image: bruschetta
        },
        {
            id: 8,
            dish: 'Carpaccio De Carne',
            description: 'Center cut USDA Prime filet mignon, thinly sliced carpaccio style, Italian capers, shaved Red Fox Cheddar, EVOO, organic arugula, local lemon, sea salt flakes',
            price: '$24',
            image: carpaccioCarne
        },
        {
            id: 9,
            dish: 'Calamari & Gamberi Fritti',
            description: 'Lightly fried calamari and wild white shrimp served with arrabbiata sauce',
            price: '$22',
            image: calamariFritti
        },
        {
            id: 10,
            dish: 'Calamari & Gamberi Alla Luciana',
            description: 'Calamari and wild white shrimp sautéed in garlic, tomato, lemon lobster reduction sauce',
            price: '$22'
        },
        {
            id: 11,
            dish: 'Butternut Squash Ravioli',
            description: 'Housemade organic butternut squash ricotta ravioli, brown butter sage sauce',
            price: 'Appetizer $17 | Entrée $24',
            image: zucca
        },
        {
            id: 12,
            dish: 'Scottadito',
            description: 'Australian lamb chops, marinated garlic rosemary sauce over arugula and cherry tomato salad',
            price: '$36'
        }
    ]

    return (
        <div className='border-solid border-2 border-red xs:w-auto md:w-[80%] m-10'>
            <div className='bg-red min-h-[5rem] flex items-center justify-center'>
                <h1 className='text-white text-4xl italic'>Per La Tavola</h1>
            </div>
            <div className='per-la-tavola grid grid-rows-6 grid-flow-col col-start-auto col-end-auto gap-12 m-10'>
                {perLaTavola.map(appetizers => {
                    return (
                        <div key={appetizers.id} className='flex flex-col p-3'>
                            <div className='flex justify-between font-bold italic'>
                                <h2 className='text-lg '>{appetizers.dish}</h2>
                                <p className='text-lg'>{appetizers.price}</p>
                            </div>
                            <p className='text-lg'>{appetizers.description}</p>
                            <div className="flex justify-center">
                                {appetizers.image && (
                                    <img src={appetizers.image} className='xs:h-[25rem] w-[100%] rounded-2xl'></img>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FoodMenu;