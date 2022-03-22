import Shape from './shape';
class Circle extends Shape {
    private static pi: Number = 3.14;
    static area: Number;
    private radius: Number;
    constructor(value: Number) {
        super();
        this.radius = value;
    }
    public calcArea() {
        Circle.area = Number(this.radius) * Number(this.radius) * Number(Circle.pi);
    }
    public printArea() {
        console.log(Circle.area);
    }
    public getArea() {
        this.calcArea();
        this.printArea();
    }
}

export default Circle