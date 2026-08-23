class Person {
  name: string;
  age: number;
  grade: number;
  constructor(name: string, age: number, grade: number) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

const person1 = new Person("Tien Dat", 20, 9);
person1.displayInfo();
