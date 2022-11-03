import {Invoice} from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplates.js';
import {Payments} from './classes/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi','web work', 250);
// docTwo = new Payments('mario', 'plumbing work', 200);

// let docs: HasFormatter[]=[];
// docs.push(docOne);
// docs.push(docTwo);


 const invOne = new Invoice('Aayush','making website', 5000);
 const invTwo = new Invoice('Aanchal','maths tuitions', 10000);

 let invoices : Invoice[] = [];
 invoices.push(invOne);
 invoices.push(invTwo);

 invoices.forEach(inv =>{
    console.log(inv.client, inv.amount, inv.format());
 })

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list templates
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();

    let doc:HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }else{
        doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
    
})

//GENERICS
//ENUMS