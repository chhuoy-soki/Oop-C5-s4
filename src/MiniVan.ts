import { Vehicle } from "./vehicle"

export class MiniVan extends Vehicle{
    public numberCustomer: number;
    public numberLuggage: number;
    constructor( numberCustomer: number,numberLuggage: number, plateID:string,weight:string){
        super(plateID,weight);
        this.numberCustomer = numberCustomer
        this.numberLuggage = numberLuggage
    }
    getSpeed(): number {
        let speed = 130;
        if(this.numberCustomer > 0){
            let passenger = this.numberCustomer *10;
            speed -= passenger

        }
        if(this.numberLuggage > 0){
            let luggage = this.numberLuggage * 5;
            speed -= luggage

        }
        return speed

    }
}