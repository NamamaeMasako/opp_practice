"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __importDefault(require("./shape"));
class Square extends shape_1.default {
    constructor(value) {
        super();
        this.width = value;
    }
    calcArea() {
        Square.area = Number(this.width) * Number(this.width);
    }
    printArea() {
        console.log(Square.area);
    }
    getArea() {
        this.calcArea();
        this.printArea();
    }
}
exports.default = Square;
