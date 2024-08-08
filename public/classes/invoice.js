// classes
export class Invoice {
    // readonly client: string;
    // details: string;
    // public amount: number;
    constructor(// better way to write the constructor and the access modifiers at the same time
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d; 
    //     this.amount = a;
    // }
    format() {
        // this.client = 'somethig'
        return `${this.client} owes ₹${this.amount} for ${this.details}`;
    }
}
