import { Invoice } from "./classes/invoice.js"
import { payment } from "./classes/payment.js"
import { hasFormatter } from "./interfaces/hasFormatter.js"

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
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: hasFormatter;
    if (type.value == 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    console.log(
        // type.value,
        // tofrom.value,
        // details.value,
        // amount.valueAsNumber
        doc
    );

})

