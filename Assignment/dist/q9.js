"use strict";
// 9. Write a program to print the following pattern (hint: use nested loop)
// 1
// 1 2
// 1 2 3
// 1 2 3 4
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require("readline-sync");
const getNumberInput = (prompt) => {
    return parseInt(readlineSync.question(prompt), 10);
};
const n = getNumberInput('Enter a number:');
for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += j + ' ';
    }
    console.log(line.trim());
}
