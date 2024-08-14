"use strict";
// 4.Write a program to check whether a student has passed or failed in a subject after he    or she enters their mark (pass mark for a subject is 50 out of 100).
// a.Program should accept an input from the user and output a message as “Passed” or “Failed”
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require("readline-sync");
const getNumberInput = (prompt) => {
    return parseFloat(readlineSync.question(prompt));
};
const mark = getNumberInput('Enter the mark:');
const passMark = 50;
const result = mark >= passMark ? 'Passed' : 'Failed';
console.log(`Result :${result}`);
