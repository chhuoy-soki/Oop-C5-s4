import { Vehicle } from "./vehicle";

export class BatMobile extends Vehicle {
    public isBatmanHere: boolean;
    constructor(isBatmanHere:boolean,plateID:string, weight:string){
        super(plateID,weight);
        this.isBatmanHere = isBatmanHere;
    }

}