import {HasFormatter} from '../interfaces/HasFormatter.js'

//classes
export class Payments implements HasFormatter{
    // readonly client : string;
    // public details : string;
    // private amount : number;

    // constructor(__client : string, __details : string, __amount : number){
    //     this.client = __client;
    //     this.details = __details;
    //     this.amount = __amount;
    // }

    constructor (
    readonly recipient : string,
    public details : string,
    private amount : number
    ){}

    format(){
        return `${this.recipient} is owed ₹${this.amount} for ${this.details}`
    }
 }
