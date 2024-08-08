// explicit types
let character: string
let age: number
let isLoggedIn: boolean

// age = 'luigi'
age = 50;
// isLoggedIn = 25
isLoggedIn = true

// arrays
let ninjas: string[] = []

ninjas.push('haha')
// ninjas = [10,20]
ninjas = ['yoshi', 'hehe']


// union types
let mixed: (string | number | boolean)[] = []
mixed.push('hello')
mixed.push(20)
mixed.push(true)
console.log(mixed);

let uid: string | number
uid = '123';
uid = 123;
// uid = true;


// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 }

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColor: 'black',
    // skills = ['haha','hehe']
}