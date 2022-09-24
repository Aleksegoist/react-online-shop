import shoes01 from '../assets/shoes01.jpg'
import shoes02 from '../assets/shoes02.jpg'
import shoes03 from '../assets/shoes03.jpg'
import shoes04 from '../assets/shoes04.jpg'

import shirt01 from '../assets/shirt01.jpg'
import shirt02 from '../assets/shirt02.jpg'
import shirt03 from '../assets/shirt03.jpg'
import shirt04 from '../assets/shirt04.jpg'
import shirt05 from '../assets/shirt05.jpg'
import shirt06 from '../assets/shirt06.jpg'
import shirt07 from '../assets/shirt07.jpg'
import shirt08 from '../assets/shirt08.jpg'


const products = [
    {
        id: '01',
        productName: 'Nike',
        imgUrl: shoes01,
        category: 'trainers',
        price: 80,
        shortDesc: 'dark grey air max sc trainers',
        description: 'Old-school look, new-school comfort! The Nike Air Max SC trainer defines style with its heritage silhouette, easy going lines and unbeatable Air cushioning. Dark grey colourway and Swoosh branding completes.',
        reviews: [
            {
                rating: 4.7,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
        ],
        avgRating: 4.5,
    },

    {
        id: '02',
        productName: 'Nike',
        imgUrl: shoes02,
        category: 'trainers',
        price: 145,
        shortDesc: 'black and blue air max 270 trainers',
        description: 'Cop the Air! The Nike Air Max 270 arrives in a black man-made upper paired with a sporty and lightweight silhouette for real comfy wear. Blue accents, a visible Air Max sole unit and iconic Swoosh branding complete this must have fit.',
        reviews: [
            {
                rating: 4.9,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
        ],
        avgRating: 4.9,
    },

    {
        id: '03',
        productName: 'Nike',
        imgUrl: shoes03,
        category: 'trainers',
        price: 80,
        shortDesc: 'white & red air max bolt trainers',
        description: 'The Nike Air Max Bolt lands in a white and red man-made upper paired with a lightweight and sporty silhouette with maximum style points. Added cushioning and Swoosh branding completes.',
        reviews: [
            {
                rating: 4.7,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
        ],
        avgRating: 4.7,
    },

    {
        id: '04',
        productName: 'Nike',
        imgUrl: shoes04,
        category: 'trainers',
        price: 120,
        shortDesc: 'multi react vision trainers',
        description: 'Get ready to up your game with the latest drops of Nike! The React Vision arrives in a white man-made upper with React technology for ultimate comfort and style. Finished with colourful accents and sporty feel.',
        reviews: [
            {
                rating: 4.8,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
        ],
        avgRating: 4.8,
    },

    {
        id: '05',
        productName: 'Timberland',
        imgUrl: shirt01,
        category: 'shirts',
        price: 25,
        shortDesc: 'front logo t-shirt in green',
        description: 'The Front Logo T-shirt from Timberland arrives in a versatile green colourway. Boasting bold branding front and centre for an instantly recognisable finish. Pair with any new season fit for ultimate style points.',
        reviews: [
            {
                rating: 4.8,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
        ],
        avgRating: 4.8,
    },

    {
        id: '06',
        productName: 'New Balance',
        imgUrl: shirt02,
        category: 'shirts',
        price: 30,
        shortDesc: 'Inspired by 1970s fashion, the New Balance Athletics 70s Run Graphic T-Shirt is the vintage fit you need this new season! Featuring a pale pink colourway with a comfy relaxed silhouette, you"re definitely scoring high in style points with this one!',
        reviews: [
            {
                rating: 4.8,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
        ],
        avgRating: 4.8,
    },

    {
        id: '07',
        productName: 'Vans',
        imgUrl: shirt03,
        category: 'shirts',
        price: 32,
        shortDesc: 'mt t-shirt in dark green',
        description: 'Get on the top of the style game this season with the Vans MT T-Shirt! This fit arrives in a dark green fabric material paired with a mountain landscape graphic embossed in the centre.',
        reviews: [
            {
                rating: 4.8,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
        ],
        avgRating: 4.8,
    },

    {
        id: '08',
        productName: 'Santa Cruz',
        imgUrl: shirt04,
        category: 'shirts',
        price: 42,
        shortDesc: 'all in t-shirt in white & pink',
        description: 'The Santa Cruz All In T-shirt brings all the cool vibes! With its cool white and pink tie-dye pattern, bold graphics, iconic branding and relaxed fit - we"re into it. Pair with your favorite sneakers to complete the look!',
        reviews: [
            {
                rating: 4.8,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
        ],
        avgRating: 4.8,
    },
    {
        id: '09',
        productName: 'Dickies',
        imgUrl: shirt05,
        category: 'shirts',
        price: 30,
        shortDesc: 'union springs t-shirt in orange',
        description: 'The Union Springs T-shirt boasts an orange fabric material with a relaxed fit to keep you looking cool and comfy. Embossed DICKIES branding front and centre completes!',
        reviews: [
            {
                rating: 4.8,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
        ],
        avgRating: 4.8,
    },
    {
        id: '10',
        productName: 'DC',
        imgUrl: shirt06,
        category: 'shirts',
        price: 27,
        shortDesc: 'storm trooper t shirt in black & white',
        description: 'This Star Wars Storm Trooper Tee from DC comes with plenty of skate fun! This classic fit arrives in a black fabric with a Storm Trooper graphic embossed on the back. Star Wars and DC branding completes.',
        reviews: [
            {
                rating: 4.8,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
        ],
        avgRating: 4.8,
    },
    {
        id: '11',
        productName: 'Vans',
        imgUrl: shirt07,
        category: 'shirts',
        price: 25,
        shortDesc: 'fatal floral t-shirt in black',
        description: 'Get on the top of the style game this season with the Vans Fatal Floral T-Shirt! This fit arrives in a black fabric material paired with a Venus Flytrap floral graphic embossed in the centre.',
        reviews: [
            {
                rating: 4.8,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
        ],
        avgRating: 4.8,
    },
    {
        id: '12',
        productName: 'Converse',
        imgUrl: shirt08,
        category: 'shirts',
        price: 27,
        shortDesc: 'peanuts pocket t-shirt in black',
        description: 'The Converse Peanuts Pocket T-Shirt is made for your wardrobe, trust us! Arriving in a black soft and comfortable fabric, this T-Shirt features iconic Peanuts characters.',
        reviews: [
            {
                rating: 4.8,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            },
        ],
        avgRating: 4.8,
    },

]

export default products; 