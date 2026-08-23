interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Bird implements Flyable {
  fly(): void {
    console.log("Chim tung canh");
  }
}
class Fist implements Swimmable {
  swim(): void {
    console.log("Ca boi ");
  }
}
const bird = new Bird();
bird.fly();
const fish = new Fist();
fish.swim();
