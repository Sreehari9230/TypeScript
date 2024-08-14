"use strict";
// 8. Write a program to find the sum of all the odd numbers for a given limit
// a.Program should accept an input as limit from the user and display the sum of all the odd numbers within that limit
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require("readline-sync");
const getNumberInput = (prompt) => {
    return parseInt(readlineSync.question(prompt), 10);
};
const limit = getNumberInput('Enter a limit: ');
let sum = 0;
for (let i = 1; i <= limit; i += 2) {
    sum += i;
}
console.log(`Sum of odd numbers = ${sum}`);
