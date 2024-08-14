"use strict";
// 5. Write a program to show the grade obtained by a student after he/she enters their total mark percentage.
// a.Program should accept an input from the user and display their grade as follows
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require("readline-sync");
const getNumberInput = (prompt) => {
    return parseFloat(readlineSync.question(prompt));
};
const totalMark = getNumberInput('Enter the total mark percentage:');
let grade;
if (totalMark > 90) {
    grade = 'A';
}
else if (totalMark >= 80) {
    grade = 'B';
}
else if (totalMark >= 70) {
    grade = 'C';
}
else if (totalMark >= 60) {
    grade = 'D';
}
else if (totalMark >= 50) {
    grade = 'E';
}
else {
    grade = 'Failed';
}
console.log(`Grade : ${grade}`);
