import {HasFormatter} from '../interfaces/HasFormatter.js'

//classes
export class Invoice implements HasFormatter{
    // readonly client : string;
    // public details : string;
    // private amount : number;

    // constructor(__client : string, __details : string, __amount : number){
    //     this.client = __client;
    //     this.details = __details;
    //     this.amount = __amount;
    // }

    constructor (
    readonly client : string,
    public details : string,
    public amount : number
    ){}

    format(){
        return `${this.client} owes ₹${this.amount} for ${this.details}`
    }
 }
