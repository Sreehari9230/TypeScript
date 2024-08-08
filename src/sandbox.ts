let greet: Function

// example 1
let gree: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}


// example 2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}

// /example 3

let logDetails: (obj: { name: string, age: number }) => void

type person = {name:string ,age:number} //you can give this insted of the below object as well TYPE ALIASES

logDetails = (ninja: { name: string, age: number }) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}