// 
// File: App.Config.js
// Auth: Martin Burolla
// Date: 10/19/2022
// Desc: All configuration options for the application.
//

export const drinkPrices = [
    { 
        id: 1,
        type: "lemonade",
        price: 1.00 
    },
    { 
        id: 2,
        type: "tea",
        price: 2.00 
    },
    { 
        id: 3,
        type: "coffee",
        price: 3.00 
    },
    {
        id: 4,
        type: "milk",
        price: 4.00
    }

]

export const foodPrices = [
    { 
        id: 1,
        type: "Hamburger",
        price: 11.00 
    },
    { 
        id: 2,
        type: "pasta",
        price: 15.00 
    },
    { 
        id: 3,
        type: "pizza",
        price: 3.00 
    },
    {
        id: 4,
        type: "jerk_chicken",
        price: 20.00
    },
    {
        id:5,
        type:"sushi",
        price: 24.00
    }

]



export const getPriceForDrink = (type) => {
    return drinkPrices.find(p => p.type === type).price
}


