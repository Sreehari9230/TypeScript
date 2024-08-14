import * as readlineSync from 'readline-sync';

const character: string = readlineSync.question('Enter a character: ');

if (character.length === 1) {
    console.log('Result is:', character);
} else {
    console.log('Please enter only one character');
}