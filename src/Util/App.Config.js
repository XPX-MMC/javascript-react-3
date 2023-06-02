//
// File: App.Config.js
// Auth: Martin Burolla
// Date: 10/19/2022
// Desc: All configuration options for the application.
//

export const drinkPrices = [
	{
		id: 1,
		type: 'lemonade',
		price: 1.0,
	},
	{
		id: 2,
		type: 'tea',
		price: 2.0,
	},
	{
		id: 3,
		type: 'coffee',
		price: 3.0,
	},
	{
		id: 4,
		type: 'milk',
		price: 4.0,
	},
];

export const foodPrices = [
	{
		id: 1,
		type: 'sandwich',
		price: 3.0,
	},
	{
		id: 2,
		type: 'croissant',
		price: 2.0,
	},
	{
		id: 3,
		type: 'cookie',
		price: 1.5,
	},
	{
		id: 4,
		type: 'parfait',
		price: 3.0,
	},
];

export const getPriceForDrink = (type) => {
	return drinkPrices.find((p) => p.type === type).price;
};

export const getPriceForFood = (type) => {
	return foodPrices.find((p) => p.type === type).price;
};
