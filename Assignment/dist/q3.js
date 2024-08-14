"use strict";
// 3. Write a program to find the simple interest.
// a.Program should accept 3 inputs from the user and calculate simple interest for the given inputs. Formula: SI=(P*R*n)/100)
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require("readline-sync");
const getNumberInput = (prompt) => {
    return parseFloat(readlineSync.question(prompt));
};
const principal = getNumberInput('Enter the principal amount (p):');
const rate = getNumberInput('Enter the interest rate (R):');
const years = getNumberInput('Enter the number of years(n):');
const simpleInterest = (principal * rate * years) / 100;
console.log(`The simple interest is ${simpleInterest}`);
