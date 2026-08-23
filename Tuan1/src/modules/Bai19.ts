class Animal {
  sound(): void {
    console.log("Animal make sound");
  }
}

class Dog extends Animal {
  sound(): void {
    console.log("Dog Bark");
  }
}

class Cat extends Animal {
  sound(): void {
    console.log("Cat  Meow");
  }
}


const animals: Animal[] = [new Dog(), new Cat(), new Animal()];

animals.forEach((animal) => {
  animal.sound();
});
