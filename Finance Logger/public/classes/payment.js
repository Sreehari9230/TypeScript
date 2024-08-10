// classes
export class payment {
    constructor(// better way to write the constructor and the access modifiers at the same time
    recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed ₹${this.amount} for ${this.details}`;
    }
}
