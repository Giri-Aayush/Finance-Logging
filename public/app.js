"use strict";
//classes
class Invoice {
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
const invOne = new Invoice('Aayush', 'making website', 5000);
const invTwo = new Invoice('Aanchal', 'maths tuitions', 10000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
