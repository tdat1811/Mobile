class Car {
  brand: string;
  model: string;
  year: number;
  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo(): void {
    console.log(
      `Brand : ${this.brand} , Model : ${this.model} , Year : ${this.year}`,
    );
  }
}

const car1 = new Car("Tommy", "Carmy", 2020);
car1.displayInfo();
