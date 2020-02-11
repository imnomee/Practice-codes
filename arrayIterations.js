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

///////////// PRACTICE
const todos = [
    {
        todo: "Buy apples",
        done: false
    },
    {
        todo: "Wash car",
        done: true
    },
    {
        todo: "Write web app",
        done: false
    },
    {
        todo: "Read MDN page on JavaScript arrays",
        done: true
    },
    {
        todo: "Call mom",
        done: false
    }
];
let unfinishedTasks;

// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
// Write your code below

unfinishedTasks = todos.filter(todo => !todo.done).map(todo => todo.todo);

console.log(unfinishedTasks);

//////////
const products = [
    { name: "hard drive", price: 59.99 },
    { name: "lighbulbs", price: 2.59 },
    { name: "paper towels", price: 6.99 },
    { name: "flatscreen monitor", price: 159.99 },
    { name: "cable ties", price: 19.99 },
    { name: "ballpoint pens", price: 4.49 }
];

// Result: { name: 'paper towels', price: 6.99 }
const product = products
    .filter(product => product.price < 10) //prices under 10
    .reduce((highest, product) => {
        if (highest.price > product.price) {
            //if the highest has high price return that
            return highest;
        } else {
            return product; //if not return product
        }
    });
console.log(product);

const totalOver10 = products
    .filter(product => product.price > 10) //prices over 10
    .reduce((sum, product) => sum + product.price, 0) // sume of all the returned prices
    .toFixed(2); //limit the decimal to 2
console.log(totalOver10);

///////////PRACTICE

const purchaseItems = [
    {
        name: "apples",
        dept: "groceries",
        price: 2.49
    },
    {
        name: "bread",
        dept: "groceries",
        price: 2.99
    },
    {
        name: "batteries",
        dept: "electronics",
        price: 5.8
    },
    {
        name: "eggs",
        dept: "groceries",
        price: 3.99
    },
    {
        name: "t-shirts",
        dept: "apparel",
        price: 9.99
    }
];
let groceryTotal;

// groceryTotal should be: 9.47
// Write your code below

groceryTotal = purchaseItems
    .filter(item => item.dept == "groceries")
    .reduce((sum, item) => {
        return sum + item.price;
    }, 0);
console.log(groceryTotal);
/////////////

const movies = [
    ["The Day the Earth Stood Still", "Superman", "Ghostbusters"],
    ["Finding Dory"],
    ["Jaws", "On the Waterfront"]
];

const flatMovies = movies.reduce(
    (arr, innerMovie) => [...arr, ...innerMovie],
    []
);
console.log(flatMovies);
// Result: ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters', 'Finding Dory', 'Jaws', 'On the Waterfront']

//////

const userBooks = [
    {
        name: "Samir",
        age: 27,
        favoriteBooks: [
            { title: "The Iliad" },
            { title: "The Brothers Karamazov" }
        ]
    },
    {
        name: "Angela",
        age: 33,
        favoriteBooks: [
            { title: "Tenth of December" },
            { title: "Cloud Atlas" },
            { title: "One Hundred Years of Solitude" }
        ]
    },
    {
        name: "Beatrice",
        age: 42,
        favoriteBooks: [{ title: "Candide" }]
    }
];
const books = userBooks
    .map(user => user.favoriteBooks.map(book => book.title))
    .reduce((arr, innerTitle) => [...arr, ...innerTitle], []);

console.log(books);

////////////Practice

const customerNames = [
    ["John", "Sandy", "Tyrone", "Elizabeth", "Penny"],
    ["Barry", "Wanda", "Jamal", "Hayden"],
    ["Portia", "Pam", "Philip"]
];
let flattenedCustomerNames;

flattenedCustomerNames = customerNames.reduce(
    // setting outer array and inner array
    (Outerarray, innerArray) => [...Outerarray, ...innerArray],
    [] // Starting with empty array
);

console.log(flattenedCustomerNames);

///////////

const customers = [
    {
        name: "Tyrone",
        personal: {
            age: 33,
            hobbies: ["Bicycling", "Camping"]
        }
    },
    {
        name: "Elizabeth",
        personal: {
            age: 25,
            hobbies: ["Guitar", "Reading", "Gardening"]
        }
    },
    {
        name: "Penny",
        personal: {
            age: 36,
            hobbies: ["Comics", "Chess", "Legos"]
        }
    }
];
let hobbies;

// hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
// Write your code below

hobbies = customers
    .map(customer => customer.personal)
    .reduce(
        (outerarray, innerArray) => [...outerarray, ...innerArray.hobbies],
        []
    );
console.log(hobbies);
