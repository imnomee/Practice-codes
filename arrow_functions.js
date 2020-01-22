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
const square = (x)=> {
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
const multiply = (x , y) => x * y;
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
  
  const divide2 = function(a, b) {
    return a / b;
  }
  
  //Arrow Function Expression
  
  const divide3 = (a, b) => {
    return a / b;
  }
  
  //Arrow Function Expression - concise
  
  const divide4 = (a, b) => a / b;
  