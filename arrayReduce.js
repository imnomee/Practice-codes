//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const numbers = [0, 1, 2, 3];
let number = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0 // 0 is the first value to start from, if not given it will take first value from array
);
console.log(number);

///////////////
let sum = [5, 1, 2, 3].reduce((a, b) => a + b); //for all 4 values you can use any name and first value is not given

console.log(sum);

/////////////////

const prices = [6.75, 3.1, 4.0, 8.12]; // Total: 21.97

let total = prices.reduce((sum, price) => sum + price);

console.log(total);

const names = ["Gary", "Pasan", "Gabe", "Treasure", "Gengis", "Gladys", "Tony"];

const nameCount = names.reduce((count, name) => {
    if (name[0] == "G") {
        return count + 1; //here we need to use +1 and not ++. ++ will return undefined
    } else {
        return count;
    }
}, 0);
console.log(nameCount);

const phoneNumbers = [
    "(503) 123-4567",
    "(646) 123-4567",
    "(503) 987-6543",
    "(503) 234-5678",
    "(212) 123-4567",
    "(416) 123-4567"
];
let numberOf503;

// numberOf503 should be: 3
// Write your code below

numberOf503 = phoneNumbers.reduce((count, number) => {
    if (number.slice(1, 4) == "503") {
        return count + 1;
    } else {
        return count;
    }
}, 0);

console.log(numberOf503);
