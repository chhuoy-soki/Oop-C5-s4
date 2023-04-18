"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tuctuc = void 0;
const vehicle_1 = require("./vehicle");
class Tuctuc extends vehicle_1.Vehicle {
    constructor(numberOfCustomers, plateID, weight) {
        super(plateID, weight);
        this.numberOfCustomers = numberOfCustomers;
    }
}
exports.Tuctuc = Tuctuc;
