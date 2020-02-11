const strings = ["1", "2", "3", "4", "5"];
///https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
const numbers = strings.map(string => parseInt(string));

console.log(numbers);

///////
const fruits = ["apple", "pear", "cherry"];

let capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(capitalizedFruits);

///////https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
const prices = [5, 4.23, 6.4, 8.09, 3.2];
const priceToDollars = price => `$${price.toFixed(2)}`;
const currency = prices.map(priceToDollars);

console.log(currency);

const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let abbreviatedDays = daysOfWeek.map(day => day.slice(0, 3));

// abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// Write your code below

console.log(abbreviatedDays);
