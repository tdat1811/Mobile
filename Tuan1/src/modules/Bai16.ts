class Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}
const number1 = new Box<number>(10);
const string1 = new Box<string>("Tien dat");
console.log(number1);
console.log(string1);
