"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require("readline-sync");
const character = readlineSync.question('Enter a character: ');
if (character.length === 1) {
    console.log('Result is:', character);
}
else {
    console.log('Please enter only one character');
}
