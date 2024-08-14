"use strict";
// 6.Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows. 
// 1 = Sunday,2 = Monday,3 = Tuesday,4 = Wednesday,5 = Thursday,6 = Friday,7 = Saturday,Any other input = Invalid Entry
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require("readline-sync");
const getNumberInput = (prompt) => {
    return parseInt(readlineSync.question(prompt), 10);
};
const dayNumber = getNumberInput('Enter a number (1-7):');
let day;
switch (dayNumber) {
    case 1:
        day = 'Sunday';
        break;
    case 2:
        day = 'Monday';
        break;
    case 3:
        day = 'Tuesday';
        break;
    case 4:
        day = 'Wednesday';
        break;
    case 5:
        day = 'Thursday';
        break;
    case 6:
        day = 'Friday';
        break;
    case 7:
        day = 'Saturday';
        break;
    default:
        day = 'Invalid Entry';
        break;
}
console.log(`Day: ${day}`);
