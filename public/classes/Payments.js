//classes
export class Payments {
    // readonly client : string;
    // public details : string;
    // private amount : number;
    // constructor(__client : string, __details : string, __amount : number){
    //     this.client = __client;
    //     this.details = __details;
    //     this.amount = __amount;
    // }
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed ₹${this.amount} for ${this.details}`;
    }
}
