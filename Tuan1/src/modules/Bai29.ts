interface Moveable {
  move(): void;
}
class CarMovable implements Moveable {
  move(): void {
    console.log("Car moves on the road");
  }
}
class Robot implements Moveable {
  move(): void {
    console.log("Robot move with legs");
  }
}

const car = new CarMovable();
const robot = new Robot();

car.move();
robot.move();
