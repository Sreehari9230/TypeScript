"use strict";
let greet;
// example 1
let gree;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// /example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
