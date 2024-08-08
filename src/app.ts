// classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }


    format() {
        return `${this.client} owes ₹${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('Messi','for rigging the ballondor',1000)
const invTwo = new Invoice('Ronaldo','for commenting in instagram from his sisters phone',500)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invOne.client = 'hehe'
invTwo.amount = 200

console.log(invOne,invTwo);
console.log(invoices);







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

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );

})

