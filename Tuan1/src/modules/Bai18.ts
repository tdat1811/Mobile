class MathUtil {
  number1: number;
  number2: number;
  constructor(number1: number, number2: number) {
    this.number1 = number1;
    this.number2 = number2;
  }
  add(): number {
    return this.number1 + this.number2;
  }
  subtract(): number {
    return this.number1 - this.number2;
  }
  multiply(): number {
    return this.number1 * this.number2;
  }
  divide(): number {
    return this.number1 / this.number2;
  }
}
const math1 = new MathUtil(5, 2);
console.log("Tong cua 5 va 2 la ", math1.add());
console.log("hieu cua 5 va 2 la ", math1.subtract());
console.log("  5 x 2 la ", math1.multiply());
console.log("Thuong cua 5 va 2 la ", math1.divide());
