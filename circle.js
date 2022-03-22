"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __importDefault(require("./shape"));
class Circle extends shape_1.default {
    constructor(value) {
        super();
        this.radius = value;
    }
    calcArea() {
        Circle.area = Number(this.radius) * Number(this.radius) * Number(Circle.pi);
    }
    printArea() {
        console.log(Circle.area);
    }
    getArea() {
        this.calcArea();
        this.printArea();
    }
}
Circle.pi = 3.14;
exports.default = Circle;
