import { setServers } from "dns";
import { Vehicle } from "./vehicle";

export class Tuctuc extends Vehicle{
    public numberOfCustomers: string;
    
    constructor(numberOfCustomers:string, plateID:string, weight:string){
        super(plateID,weight);
        this.numberOfCustomers = numberOfCustomers
    }
    getSpeed(): number {
        let speed = 130;
        let passenger = speed - 5
        
    }
}