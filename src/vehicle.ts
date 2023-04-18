export abstract class Vehicle {
    private plateID: string;
    private weight: string;
    constructor(plateID:string, weight:string){
        this.plateID = plateID;
        this.weight = weight;
    }
    getSpeed():void{}
}