import Shape from './shape';
class Square extends Shape {
    static area: Number;
    private width: Number;
    constructor(value: Number) {
        super();
        this.width = value;
    }
    public calcArea() {
        Square.area = Number(this.width) * Number(this.width);
    }
    public printArea() {
        console.log(Square.area);
    }
    public getArea() {
        this.calcArea();
        this.printArea();
    }
}

export default Square