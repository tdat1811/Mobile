interface Vehicle {
  name: string;
  drive(): void;
}
class Car implements Vehicle {
  drive(): void {
    console.log("Car is driving");
  }
  name: string = "Car";
}
class Bike implements Vehicle {
  drive(): void {
    console.log("Bike is riding");
  }
  name: string = "Bike";
}
const car1 = new Car();
car1.drive();
const bike1 = new Bike();
bike1.drive();
