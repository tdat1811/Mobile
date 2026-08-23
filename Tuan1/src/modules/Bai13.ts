abstract class Shape {
  abstract area(): number;
}

class Square extends Shape {
  edges: number;
  constructor(edges: number) {
    super();
    this.edges = edges;
  }
  area(): number {
    return this.edges * this.edges;
  }
}
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  area(): number {
    return this.radius * this.radius * 3.14;
  }
}
const square1 = new Square(5);
console.log("Square area : ", square1.area());

const circle1 = new Circle(3);
console.log("Circle area : ", circle1.area());
