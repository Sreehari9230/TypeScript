"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ₹${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Messi', 'for rigging the ballondor', 1000);
const invTwo = new Invoice('Ronaldo', 'for commenting in instagram from his sisters phone', 500);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client = 'hehe'
// invTwo.amount = 200
// console.log(invOne,invTwo);
// console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});