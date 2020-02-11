
//Log only the names starting with S
const names = ["Selma", "Ted", "Mike", "Sam", "Sharon", "Marvin"];
const startsWithS = name => name.charAt(0) == "S";
const sName = names.filter(startsWithS);

console.log(sName);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const no3 = numbers.filter(number => number != 3);
const only2 = numbers.filter(number => number == 2);
const even = numbers.filter(number => number % 2 == 0);
console.log(even);

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = years.filter(year => year <= 2000);

// century20 should be: [1989, 2000, 1999, 1973]
// Write your code below

console.log(century20);
