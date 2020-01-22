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
cosnt square = (x)=> {
    return x * x;
}

const cube = (x) => {
    return square(x) * x;
}