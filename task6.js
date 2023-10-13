const fuel_consumption = 8; /*fuel_consumption for 100km*/
const distanse = 500; /* distanse in km*/
const price_per_liter = 50; /*price for 1 liter in rubles*/
const cost_of_the_trip = (distanse/100) * fuel_consumption * price_per_liter; 
console.log(cost_of_the_trip);