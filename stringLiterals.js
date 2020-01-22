
//Normal Syntax
function like(thing) {
    return 'I like ' + thing;
}

//String Literal Interpolation
function love(thing) {
    return `I love ${thing}`;
}

//normal sentence
//const sentence = `<p>` + like(`apples`) + `.</p>`;

//Interpolated sentence
const sentence = `<p>${like('apples')} but ${love('Mangoes')}.</p>`;
console.log(sentence);


/*MDN link
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/