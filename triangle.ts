import Shape from './shape';
class Triangle extends Shape {
    static area: Number;
    static height: Number;
    private side: Number;
    constructor(value: Number) {
        super();
        this.side = value;
        Triangle.height = Math.sqrt(Math.pow(Number(this.side), 2) - Math.pow(Number(this.side) * 0.5, 2));
    }
    public calcArea() {
        Triangle.area = Number(this.side) * Number(Triangle.height) * 0.5;
    }
    public printArea() {
        console.log(Triangle.area);
    }
    public getArea() {
        this.calcArea();
        this.printArea();
    }
}

export default Triangle