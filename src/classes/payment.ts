import { hasFormatter } from "../interfaces/hasFormatter.js"

// classes
export class payment implements hasFormatter { //implements is for implementing interfaces in classes

    constructor( // better way to write the constructor and the access modifiers at the same time
        readonly recipient: string,
        private details: string,
        public amount: number,
    ) { }

    format() {
        return `${this.recipient} is owed ₹${this.amount} for ${this.details}`
    }
}