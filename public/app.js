import { Invoice } from "./classes/invoice.js";
import { listTemplate } from "./classes/listTemplates.js";
import { payment } from "./classes/payment.js";
// let docOne: hasFormatter;
// let docTwo: hasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new payment('mario', 'plumbing work', 200)
// let docs: hasFormatter[] = [];
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs);
// // interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: IsPerson = {
//     name: 'shaun',
//     age: 30,
//     speak(test: string): void {
//         console.log(Text);
//     },
//     spend(amount: number): number {
//         console.log('i spend ', amount);
//         return amount
//     },
// }
// const greet = (person:IsPerson)=>{
//     console.log('hello',person.name);
// }
// greet(me)
// console.log(me);
// import { Invoice } from "./classes/invoice.js"
// // // classes
// // class Invoice {
// //     // readonly client: string;
// //     // details: string;
// //     // public amount: number;
// //     constructor( // better way to write the constructor and the access modifiers at the same time
// //         readonly client: string,
// //         private details: string,
// //         public amount: number,
// //     ) { }
// //     // constructor(c: string, d: string, a: number) {
// //     //     this.client = c;
// //     //     this.details = d;
// //     //     this.amount = a;
// //     // }
// //     format() {
// //         // this.client = 'somethig'
// //         return `${this.client} owes ₹${this.amount} for ${this.details}`
// //     }
// // }
// const invOne = new Invoice('Messi', 'for rigging the ballondor', 1000)
// const invTwo = new Invoice('Ronaldo', 'for commenting in instagram from his sisters phone', 500)
// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)
// // invOne.client = 'hehe'
// // invTwo.amount = 200
// // console.log(invOne,invTwo);
// // console.log(invoices);
// invoices.forEach(inv => {
//     // inv.client = 'somethig'
//     console.log(inv.client, inv.amount, inv.format());
// })
// const anchor = document.querySelector('a')!; // '!' this is to let the program know that the anchor is not null for definite
// // if (anchor) {
// //     console.log(anchor.href);
// // }
// // console.log(anchor?.href); // '?' log it if its not undefined
// console.log(anchor.href); 
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs 
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value == 'invoice') {
        doc = new Invoice(...values);
        // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }
    else {
        doc = new payment(...values);
        // doc = new payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    // console.log(
    //     // type.value,
    //     // tofrom.value,
    //     // details.value,
    //     // amount.valueAsNumber
    //     doc
    // );
    list.render(doc, type.value, 'end');
});
// PROJECT OVER
// generics
const addUID = (obj) => {
    // it dosnt have to be an object always it can be any types 
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
// let docTwo = addUID('hello')   if we use extends object it has to be object
console.log(docOne.age);
// Generics with interfaces
// interface Resource<T> {
//     uid: number,
//     resourceName: string,
//     data: T
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: {name:'sreehari'}
// }
// const docFour: Resource<string[]> = {
//     uid:2,
//     resourceName:'shoppinglist',
//     data:['text','hello','hehhe']
// }
// console.log(docThree,docFour);
// ENUMS
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// interface Resource<T> {
//     uid: number,
//     resourceType: ResourceType,
//     data: T
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceType: ResourceType.BOOK,
//     data: { title: 'name of the wind' }
// }
// const docFour: Resource<object> = {
//     uid: 10,
//     resourceType: ResourceType.PERSON,
//     data: { name: 'yoshi' }
// }
// console.log(docThree,docFour);
// tuples
// normal array
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
// tuples
let tup = ['ryu', 25, false];
// tup[0] = false not posiible
tup[0] = 'heheh';
tup[1] = 200;
tup[2] = true;
let student;
student = ['chun-li', 1039];
