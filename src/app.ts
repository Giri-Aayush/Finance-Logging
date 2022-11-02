//classes
 class Invoice{
    client : string;
    details : string;
    amount : number;

    constructor(__client : string, __details : string, __amount : number){
        this.client = __client;
        this.details = __details;
        this.amount = __amount;
    }

    format(){
        return `${this.client} owes ₹${this.amount} for ${this.details}`
    }
 }

 const invOne = new Invoice('Aayush','making website', 5000);
 const invTwo = new Invoice('Aanchal','maths tuitions', 10000);

 let invoices : Invoice[] = [];
 invoices.push(invOne);
 invoices.push(invTwo);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})