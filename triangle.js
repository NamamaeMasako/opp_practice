"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __importDefault(require("./shape"));
class Triangle extends shape_1.default {
    constructor(value) {
        super();
        this.side = value;
        Triangle.height = Math.sqrt(Math.pow(Number(this.side), 2) - Math.pow(Number(this.side) * 0.5, 2));
    }
    calcArea() {
        Triangle.area = Number(this.side) * Number(Triangle.height) * 0.5;
    }
    printArea() {
        console.log(Triangle.area);
    }
    getArea() {
        this.calcArea();
        this.printArea();
    }
}
exports.default = Triangle;
