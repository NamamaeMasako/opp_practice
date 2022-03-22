"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = __importDefault(require("./circle"));
const square_1 = __importDefault(require("./square"));
const triangle_1 = __importDefault(require("./triangle"));
let C = new circle_1.default(5);
C.getArea();
let S = new square_1.default(5);
S.getArea();
let T = new triangle_1.default(5);
T.getArea();
