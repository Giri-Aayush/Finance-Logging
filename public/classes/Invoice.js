//classes
export class Invoice {
    // readonly client : string;
    // public details : string;
    // private amount : number;
    // constructor(__client : string, __details : string, __amount : number){
    //     this.client = __client;
    //     this.details = __details;
    //     this.amount = __amount;
    // }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ₹${this.amount} for ${this.details}`;
    }
}
