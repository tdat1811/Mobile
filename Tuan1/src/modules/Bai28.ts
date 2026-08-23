class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  protected makeSound(): void {
    console.log("Anime make Sound");
  }
}

class Dog extends Animal {
  protected makeSound(): void {
    console.log("Dog Bark");
  }
  constructor(name: string) {
    super(name);
  }
  testSound(): void {
    this.makeSound();
  }
}

class Cat extends Animal {
  protected makeSound(): void {
    console.log("Cat Moew");
  }
  constructor(name: string) {
    super(name);
  }
  testSound(): void {
    this.makeSound();
  }
}

const dog1 = new Dog("Cho1");
const cat1 = new Cat("Meo1");

console.log(dog1.name);
dog1.testSound();

console.log(cat1.name);
cat1.testSound();
