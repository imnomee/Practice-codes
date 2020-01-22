// 01 NO ARGUMENTS

const name = "Andrew";

//Normal Function syntax
function sayName() {
    const message = "My name is " + name;
    console.log(message);
}

function sayBye() {
    console.log("Bye " + name);
}

// Arrow Syntax

const sayName = () => {
    const message = "My name is " + name;
    console.log(message);
}

const sayBye = () => {
    console.log("Bye " + name);
}

//02 SINGLE ARGUMENT
//Normal Syntax
function square(x) {
    return x * x;
}

function cube(x) {
    return square(x) * x;
}


//Arrow Syntax
const square = (x) => {
    return x * x;
}
//OR more concise 
const squuare = x => x * x;
//----------------

const cube = (x) => {
    return square(x) * x;
}
// OR
const cube = x => square(x) * x;


//03 MULTIPLE ARGUMENTS
//Normal Syntax
function multiply(x, y) {
    return x * y;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

//Arrow syntax
const multiply = (x, y) => {
    return x * y;
}
//OR
const multiply = (x, y) => x * y;
//------------------
const add = (a, b) => {
    return a + b;
}
//OR
const add = (a, b) => a + b;
//------------
const subtract = (a, b) => {
    return a - b;
}
//OR
const subtract = (a, b) => a - b;

// 04 SAME FUNCTIONS
//Function Declaration

function divide1(a, b) {
    return a / b;
}

//Function Expression

const divide2 = function (a, b) {
    return a / b;
}

//Arrow Function Expression

const divide3 = (a, b) => {
    return a / b;
}

//Arrow Function Expression - concise

const divide4 = (a, b) => a / b;

/////////////////////////////////////
// SAMPLES
const addToTen = num => 10 + num;


const divideUs = (num1, num2) => num1 / num2;

const printMyName = () => {
    let myName = 'Ashley';
    console.log(myName);
}

const multiplyByTen = num => 10 * num;

const printToTen = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

const addUs = (num1, num2) => console.log(num1 + num2);

const multiplyUs = (num1, num2) => console.log(num1 * num2); 

const subtractFromTen = num => {
	const diff = 10 - num; 
	console.log(diff);
}

const printDate = date => console.log(date);

multiplyUs(2,6);
subtractFromTen(4);
printDate('1/16/18');