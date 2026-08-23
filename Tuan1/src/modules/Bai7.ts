class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  setName(newName: string): void {
    this.name = newName;
  }
  displayInfo(): void {
    console.log(`Name: ${this.name}`);
  }
}

const person1 = new Person("Tien Dat");
person1.displayInfo();
person1.setName("Tommy");
person1.displayInfo();
