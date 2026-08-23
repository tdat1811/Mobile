class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  calculateArea(): number {
    return this.width * this.height;
  }
  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
  displayInfo(): void {
    console.log(`width : ${this.width}, height : ${this.height}`);
    console.log(
      `Area : ${this.calculateArea()}, Perimeter : ${this.calculatePerimeter()}`,
    );
  }
}

const reg = new Rectangle(5, 10);
reg.displayInfo();
