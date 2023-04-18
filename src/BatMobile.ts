import { Vehicle } from "./vehicle";

export class BatMobile extends Vehicle {
    public isBatmanHere: boolean;
    constructor(isBatmanHere: boolean, plateID: string, weight: string) {
        super(plateID, weight);
        this.isBatmanHere = isBatmanHere;
    }
    getSpeed():number{
        let speed = 110
        if (this.isBatmanHere==true){
            speed = 500
        }
        return speed
    }

}
