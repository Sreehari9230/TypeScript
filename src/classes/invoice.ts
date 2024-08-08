// classes
export class Invoice {
    // readonly client: string;
    // details: string;
    // public amount: number;

    constructor( // better way to write the constructor and the access modifiers at the same time
        readonly client: string,
        private details: string,
        public amount: number,
    ) { }

    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d; 
    //     this.amount = a;
    // }


    format() {
        // this.client = 'somethig'
        return `${this.client} owes ₹${this.amount} for ${this.details}`
    }
}