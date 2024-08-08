// explicit types
var character;
var age;
var isLoggedIn;
// age = 'luigi'
age = 50;
// isLoggedIn = 25
isLoggedIn = true;
// arrays
var ninjas = [];
ninjas.push('haha');
// ninjas = [10,20]
ninjas = ['yoshi', 'hehe'];
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(true);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// uid = true;
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColor: 'black',
    // skills = ['haha','hehe']
};
