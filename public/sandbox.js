"use strict";
let greet;
// greet = 'hello'
greet = () => {
    console.log('hello');
};
const add = (a, b, c = 100) => {
    console.log(a + b);
    console.log(c);
    // this function als returns a value it is called void
};
add(2, 10, 'hahaha');
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 5);
// result  = 'nbgvhjg'
