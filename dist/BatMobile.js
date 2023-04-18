"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatMobile = void 0;
const vehicle_1 = require("./vehicle");
class BatMobile extends vehicle_1.Vehicle {
    constructor(isBatmanHere, plateID, weight) {
        super(plateID, weight);
        this.isBatmanHere = isBatmanHere;
    }
    getSpeed() {
        let speed = 110;
        if (this.isBatmanHere == true) {
            speed = 500;
        }
        return speed;
    }
}
exports.BatMobile = BatMobile;
