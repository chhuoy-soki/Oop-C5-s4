"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MiniVan = void 0;
var vehicle_1 = require("./vehicle");
var MiniVan = /** @class */ (function (_super) {
    __extends(MiniVan, _super);
    function MiniVan(numberCustomer, numberLuggage, plateID, weight) {
        var _this = _super.call(this, plateID, weight) || this;
        _this.numberCustomer = numberCustomer;
        _this.numberLuggage = numberLuggage;
        return _this;
    }
    MiniVan.prototype.getSpeed = function () {
        var speed = 130;
        if (this.numberCustomer > 0) {
            var passenger = this.numberCustomer * 10;
            speed -= passenger;
        }
        if (this.numberLuggage > 0) {
            var luggage = this.numberLuggage * 5;
            speed -= luggage;
        }
        return speed;
    };
    return MiniVan;
}(vehicle_1.Vehicle));
exports.MiniVan = MiniVan;
