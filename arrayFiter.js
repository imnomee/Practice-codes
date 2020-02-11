const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
// Write your code below

displayYears = years.filter(year => year >= 2001).map(year => `${year} A.D.`);

console.log(displayYears);
