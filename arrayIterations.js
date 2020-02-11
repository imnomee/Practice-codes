const arr = [1, 2, 3];

// const smallerArr = arr.filter(number => number !== 2);
// const incrementedArr = smallerArr.map(number => number + 1);

// console.log(incrementedArr); // => [2,4]

// OR

const smallerArr = arr.filter(number => number !== 2).map(number => number + 1);

console.log(smallerArr); // => [2,4]

//////////////////
const numbers = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];

const unique = numbers.filter(function(number, index, array) {
    return index === array.indexOf(number);
});

console.log(unique); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const easyWay = Array.from(new Set(numbers)); /// find unique numbers by putting in set first then return into array

const users = [
    { name: "Samir", age: 30 },
    { name: "Angela", age: 24 },
    { name: "Beatrice", age: 54 }
];
//REmove Samir from Users
const noSamir = users.filter(user => user.name != "Samir");
console.log(noSamir);

//adding string to new array // Samir is 30.
const usersArray = users.map(user => `${user.name} is ${user.age} years old.`);

console.log(usersArray);

// creating a new object from users name and age using reduce
const obj = users.reduce((object, user) => {
    object[user.name] = user.age;
    return object;
}, {});

console.log(obj);

////////////
const authors = [
    { firstName: "Beatrix", lastName: "Potter" },
    { firstName: "Ann", lastName: "Martin" },
    { firstName: "Beverly", lastName: "Cleary" },
    { firstName: "Roald", lastName: "Dahl" },
    { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;

// fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
// Write your code below

fullAuthorNames = authors.map(
    author => `${author.firstName} ${author.lastName}`
);

console.log(fullAuthorNames);

/////////////
const userNames = ["Samir", "Angela", "Beatrice", "Shaniqua", "Marvin", "Sean"];

// Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];

const sNames = userNames
    .filter(name => name[0] == "S") //filter names starting with S
    // .map(name => ({ name: name })); // New Object is created here within parens so it knows its an object
    .map(name => ({ name })); // We can use only name shortcut so it will save key is name and value as names value from map

console.log(sNames);

const usersWithAge = [
    { name: "Samir", age: 27 },
    { name: "Angela", age: 33 },
    { name: "Beatrice", age: 42 },
    { name: "Shaniqua", age: 30 },
    { name: "Marvin", age: 23 },
    { name: "Sean", age: 47 }
];

const user30 = usersWithAge
    .filter(user => user.age >= 30) //filter age over 30
    .map(user => user.name); //map to new array only names
console.log(user30);
