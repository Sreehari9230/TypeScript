"use strict";
// 2. Accept two inputs from the user and output their sum.
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require("readline-sync");
const number1 = parseFloat(readlineSync.question("Enter the first number:"));
const number2 = parseFloat(readlineSync.question('Enter the second number:'));
const sum = number1 + number2;
console.log(`The sum of ${number1} and ${number2} is ${sum}`);
