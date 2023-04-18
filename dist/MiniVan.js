"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiniVan = void 0;
const vehicle_1 = require("./vehicle");
class MiniVan extends vehicle_1.Vehicle {
    constructor(numberCustomer, numberLuggage, plateID, weight) {
        super(plateID, weight);
        this.numberCustomer = numberCustomer;
        this.numberLuggage = numberLuggage;
    }
}
exports.MiniVan = MiniVan;
