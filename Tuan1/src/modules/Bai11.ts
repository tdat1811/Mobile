class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Bark!");
  }
}

class Meow extends Animal {
  meow(): void {
    console.log("Meow!");
  }
}
const dog = new Dog("Dog");
dog.bark();
const meow = new Meow("Cat");
meow.meow();
