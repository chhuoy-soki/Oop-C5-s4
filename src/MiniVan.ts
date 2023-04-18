import { Vehicle } from "./vehicle"

export class MiniVan extends Vehicle{
    public numberCustomer: number;
    public numberLuggage: number;
    constructor( numberCustomer: number,numberLuggage: number, plateID:string,weight:string){
        super(plateID,weight);
        this.numberCustomer = numberCustomer
        this.numberLuggage = numberLuggage
    }
}